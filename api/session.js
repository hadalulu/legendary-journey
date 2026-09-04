const requestsByAddress = new Map();

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const host = request.headers['x-forwarded-host'] || request.headers.host;
  const origin = request.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).host !== host) return response.status(403).json({ error: 'Invalid origin' });
    } catch {
      return response.status(403).json({ error: 'Invalid origin' });
    }
  }

  const address = String(request.headers['x-forwarded-for'] || request.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const recent = (requestsByAddress.get(address) || []).filter(time => now - time < 10 * 60 * 1000);
  if (recent.length >= 4) return response.status(429).json({ error: 'Too many sessions' });
  recent.push(now);
  requestsByAddress.set(address, recent);

  if (!process.env.XAI_API_KEY) return response.status(500).json({ error: 'Voice service is not configured' });

  try {
    const xaiResponse = await fetch('https://api.x.ai/v1/realtime/client_secrets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ expires_after: { seconds: 300 } })
    });
    const data = await xaiResponse.json();
    response.setHeader('Cache-Control', 'no-store');
    if (!xaiResponse.ok) {
      console.error('xAI session error', xaiResponse.status);
      return response.status(502).json({ error: 'Could not create voice session' });
    }
    return response.status(200).json(data);
  } catch (error) {
    console.error('Voice session request failed', error);
    return response.status(502).json({ error: 'Could not reach voice service' });
  }
}
