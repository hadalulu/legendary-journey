const asset = name => `assets/${name}.webp`;

const pages = [
  { cover: true, images: [asset('F2E6B3AA-11BA-466E-96E2-D80279D4CEEF')], text: ['La Poderosa Hada Lulú.'] },
  { images: [asset('66320DD7-CA7E-43DF-B396-1B2FA0E5B51A_1_102_o')], text: ['Había una vez un hada muy hermosa y muy poderosa llamada Lulú.'] },
  { images: [asset('AC45510D-38CA-4632-B3F9-EA92582093E9')], text: ['Las hadas son muy pequeñitas, más o menos del tamaño de un dedo. Tienen alas brillantes como las de una mariposa y viven en un bosque encantado, muy, muy lejos de las casas de los niños. Las hadas tienen muchos poderes mágicos: pueden volar muy rápido, hablar con los animalitos, hacerse invisibles y, con un movimiento de su varita, hacer que las flores y las plantas crezcan al instante.'] },
  { images: [asset('A018819A-C4F0-462F-902A-7E1DBC558779_1_102_o')], text: ['El hada Lulú era una de las hadas más poderosas y volaba más rápido que todas las demás. Además, tenía un pequeño tigre muy especial. Cuando Lulú le hacía un guiño, el tigrito crecía de repente y se convertía en un enorme tigre protector. Con un gran rugido espantaba a los malos, y todos salían corriendo.'] },
  { images: [asset('955874F8-E9D7-44E6-9D17-48559E3A672D')], text: ['¿Sabes quiénes son los malos que siempre enojan a las hadas, Lulu? Son los duendes. Los duendes son unas criaturitas pequeñitas, del tamaño de un peluche. Tienen la piel verde, orejas grandes y puntiagudas, una nariz redonda y una sonrisa <strong>traviesa</strong>. Les encanta hacer <strong>bromas</strong>, como esconder un calcetín, mover un juguete de lugar o hacer <strong>mucho</strong> desorden. No son malos de verdad. Solo son <strong>muy, muy traviesos</strong> y casi <strong>nunca</strong> piensan antes de hacer una <strong>travesura.</strong>'] },
  { images: [asset('3751741E-76B6-479E-AF39-E9022A243227')], text: ['Cada noche, las hadas salen volando de su bosque encantado para visitar, en secreto, las casas de los niños mientras duermen. Llevan consigo un polvito <strong>mágico</strong> y <strong>brillante</strong> llamado <strong>polvo de hada</strong>, que ayuda a que los niños tengan sueños <strong>felices y tranquilos</strong>. Entran muy despacito en cada habitación y dejan caer un poquito de polvo sobre los niños dormidos. Entonces, los niños sueñan con aventuras... arcoíris... dinosaurios amistosos... y cachorritos juguetones.'] },
  { images: [asset('8B378617-54FE-41E8-8BA8-B7F8E54E7D5E')], text: ['Una noche, justo cuando el hada Lulú iba a salir del bosque encantado, escuchó unas risitas detrás de un árbol.', '—Je, je, je...', 'Lulú se acercó muy despacito para escuchar.'] },
  { images: [asset('773B9268-5C08-4E60-A3A0-DE0ED721DB3A')], text: ['<strong>¡Eran cuatro duendes!</strong>', '—¡Hoy vamos a hacer la travesura más grande de todas! —dijo uno riéndose.', '—¡Vamos a llevarnos todo el polvo de hada! —dijo otro.', '—¡Después lo llevaremos a los otros duendes que nos están esperando en el bosque, y lo vamos a aventar por los aires para hacer una nube brillante! ¡Je, je, je!', '—¡Y yo me voy a lavar las pompis con el polvo de hada! —dijo un duende muy orgulloso. Los otros empezaron a reírse.', '—¡Prrrrrt!', '—<strong>¡Puaj!</strong> ¡Te echaste un pedito!', '—¡Je, je, je! ¡Otro, otro!', '—¡Prrrrrt!', '—¡El próximo pedito será con polvo mágico! ¡Je, je, je!', 'Los cuatro duendes se morían de la risa.', '—Ahhhh... jajaja'] },
  { images: [asset('2C53A67E-BB64-4C82-850C-55E6BA223CEF_1_102_o')], text: ['Lulú abrió mucho los ojos.', '—¡Oh, no! Si se llevan todo el polvo de hada, las hadas ya no podrán llevar sueños felices a los niños en las próximas noches. <strong>¡Ya sé!</strong> Yo soy el hada <strong>más rápida</strong>. Iré por ayuda.', 'Y salió volando <strong>tan, tan</strong> rápido que parecía una estrella cruzando el cielo.'] },
  { images: [asset('8B8E1A37-A06F-44AC-A2CE-83D718C52B06')], text: ['Muy pronto encontró a sus amigas, las hadas Emma y Raquel.', '—¡Los duendes quieren llevarse el polvo mágico! —dijo Lulú', '—<strong>¡Vamos!</strong> —respondieron las dos al mismo tiempo. Las tres hadas llegaron al castillo tan rápido como pudieron y corrieron hasta la sala donde guardaban el polvo de hada.'] },
  { images: [asset('51D97B32-F698-4DF6-9B6C-8B287A742261')], text: ['—¡Ay, no!', 'El gran cofre del polvo de hada <strong>estaba abierto</strong>. ¡Y estaba <strong>completamente vacío!</strong> Por un momento, las tres hadas se quedaron en silencio.'] },
  { images: [asset('5103FEDB-DBBF-4FA7-B8B0-51C68836682A')], text: ['Emma señaló por la ventana.', '—<strong>¡Miren!</strong> ¡Sale humo del bosque! Si no lo apagamos, podría convertirse en un <strong>gran incendio</strong>. ¡Yo iré!', 'Raquel miró hacia una colina cercana.', '—¡Y allá hay un grupo <strong>enorme</strong> de duendes! Están esperando a los cuatro ladrones. <strong>¡Yo voy a detenerlos!</strong>', 'Lulú vio un caminito de polvo brillante en el suelo. Salía del cofre, cruzaba la puerta y se perdía entre los árboles.', '—<strong>Yo seguiré el rastro</strong>, recuperaré el polvo de hada y luego nos reuniremos. ¡Vamos!', 'Y las tres salieron volando, cada una hacia su <strong>importante misión</strong>.'] },
  { images: [asset('04B15042-D4FD-4573-A8FC-B4FE231262DE')], text: ['Emma siguió el humo hasta encontrar una fogata que los duendes habían dejado encendida. Levantó su varita.', '—<strong>¡Lluvia mágica!</strong>', 'Al instante comenzó a llover. ¡Plin, plin, plin! En pocos segundos, el fuego se apagó.', '—El bosque está a salvo...'] },
  { images: [asset('F19406C9-8DAF-4869-B28B-BD8B60B5B972')], text: ['Mientras tanto... Raquel encontró al gran grupo de duendes esperando a los ladrones. Levantó su varita.', '—<strong>¡Enredaderas, crezcan ahora!</strong>', 'Al instante, unas enredaderas crecieron del suelo y atraparon a <strong>todos los duendes</strong>.', '—<strong>¡Listo!</strong> ¡Ahora los ladrones no tendrán dónde esconderse!'] },
  { images: [asset('BBBC5351-F277-4144-90B8-4B03AE8D7838')], text: ['Al mismo tiempo... Lulú siguió el caminito de polvo brillante y encontró a los <strong>cuatro duendes</strong> que llevaban el saco de polvo de hada.', '—<strong>¡Ni se te ocurra usar tu magia!</strong> Si levantas tu varita, romperemos el saco y todo el polvo se perderá.', 'Lulú sonrió.', '—Muy bien... <strong>Entonces no usaré mi magia.</strong>', 'Los duendes empezaron a reír.', '—¡Je, je, je!', 'Pero Lulú le guiñó un ojo a su tigrito. El tigrito dio un saltito. <strong>¡Puf!</strong> En un abrir y cerrar de ojos se convirtió en un <strong>enorme tigre protector</strong>.'] },
  { images: [asset('17265E38-8F97-455D-8BE9-1ECBCA007E41')], text: ['—¡Rooooaaaaar!', 'Los duendes dieron un brinco del susto y salieron corriendo, dejando el saco de polvo de hada en el suelo. Lulú lo recogió y sonrió.', '—<strong>¡Lo recuperamos!</strong>'] },
  { images: [asset('6122E77E-2D77-4CCA-98B9-09248F9C21B0'), asset('90F4B904-7CA9-4468-8112-81A25E72DDDE')], text: ['Lulú voló hasta la colina donde estaban Emma y Raquel. Allí, Raquel había atrapado al gran grupo de duendes. Poco después llegaron corriendo los cuatro ladrones, y las enredaderas también los atraparon.', '—<strong>¡Lo logramos!</strong>', 'Pero Lulú se quedó pensativa.', '—Ahora que conocen el camino al castillo... ¿Qué podemos hacer para que se vayan y no vuelvan a intentar <strong>otra travesura?</strong>'] },
  { images: [asset('1A1624A9-4AE4-4098-96DA-D378CF3E9ED7')], text: ['—Necesitamos hacer un hechizo <strong>muy poderoso.</strong> Pero solo funciona si las tres hadas... ¡y la niña Lulu!... respiran juntas. <strong>¿Nos ayudas, niña Lulu?</strong>', '<strong>Sí, ¡a ti!</strong> Estamos hablando contigo, nuestra pequeña lectora. Sin tu ayuda, el hechizo no funcionará.'] },
  { images: [asset('215C9F58-5F79-448C-AD06-22364547AA95')], text: ['Primero imaginemos que olemos una flor muy bonita. Respira hondo... Uno... dos... tres... Ahora sopla una velita. Fuuuu... Otra vez. Uno... dos... tres... Fuuuu... Y una última vez. Uno... dos... tres... Fuuuu...'] },
  { images: [asset('B92D705D-C72F-4307-9002-1D464F2184FD')], text: ['Las tres hadas apuntaron sus varitas al cielo.', '—¡Luz de luna...', '—brillo de estrella...', '—que los duendes olviden el camino al castillo y recuerden siempre el camino a su hogar!', '<strong>¡Zas!</strong>'] },
  { images: [asset('3A1A63B6-E6C9-4299-B8CD-02E5349AE34C')], text: ['Los duendes parpadearon.', '—¿Qué estábamos haciendo?', '—¡No me acuerdo!', '—¡Vamos a casa!', 'Y se fueron riendo por el bosque.'] },
  { images: [asset('1FC8DD50-90B7-4614-8403-69430949CF2B')], text: ['Lulú guardó el polvo de hada en su lugar. Después, las tres hadas salieron volando para llevar <strong>sueños felices</strong> a los niños.'] },
  { images: [asset('032F252C-834F-4A17-9EE4-5A63E375C709_1_102_o')], text: ['Lulú miró hacia el cielo y sonrió.', '—<strong>Misión cumplida.</strong>', 'Y colorín colorado... ¡este cuento se ha acabado!'] }
];

const book = document.getElementById('book');
const illustrationWrap = document.getElementById('illustrationWrap');
const storyText = document.getElementById('storyText');
const pageNumber = document.getElementById('pageNumber');
const progressBar = document.getElementById('progressBar');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const coverButton = document.getElementById('coverButton');
const listenButton = document.getElementById('listenButton');
const listenLabel = document.getElementById('listenLabel');
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerClose = document.getElementById('viewerClose');
const narrationAudio = new Audio();
narrationAudio.preload = 'metadata';
const PAGE_18_INDEX = 17;

let currentPage = Number(sessionStorage.getItem('story-page') || 0);
if (currentPage < 0 || currentPage >= pages.length) currentPage = 0;
let touchStartX = 0;
let conversationState = 'idle';
let voiceSocket = null;
let microphoneStream = null;
let microphoneContext = null;
let microphoneSource = null;
let microphoneProcessor = null;
let playbackContext = null;
let playbackCursor = 0;
let conversationStartedAt = 0;
let initialFollowupTimer = null;
let waitingForFirstReply = false;
let initialFollowupSent = false;

function stopSpeaking(cancelConversation = true) {
  narrationAudio.pause();
  narrationAudio.currentTime = 0;
  if (cancelConversation) {
    endVoiceConversation();
  }
  listenButton.classList.remove('is-speaking');
  listenLabel.textContent = currentPage === PAGE_18_INDEX ? 'Iniciar conversación' : 'Escuchar';
}

function renderPage(direction = '') {
  stopSpeaking();
  document.querySelectorAll('.magic-flight, .fairy-trace').forEach(element => element.remove());
  const page = pages[currentPage];
  book.classList.toggle('cover', Boolean(page.cover));
  illustrationWrap.className = `illustration-wrap${page.images.length > 1 ? ' two-images' : ''}`;
  illustrationWrap.innerHTML = page.images.map((src, index) => `<img src="${src}" alt="Ilustración de la página ${currentPage + 1}${page.images.length > 1 ? `, imagen ${index + 1}` : ''}" draggable="false">`).join('') + '<button class="expand-image" type="button" aria-label="Ver la ilustración principal a pantalla completa" title="Pantalla completa">⛶</button>';
  storyText.innerHTML = page.text.map(paragraph => `<p>${paragraph}</p>`).join('');
  if (currentPage === PAGE_18_INDEX) renderConversationControls();
  listenButton.setAttribute('aria-label', currentPage === PAGE_18_INDEX ? 'Iniciar conversación con Lulú' : 'Escuchar esta página');
  pageNumber.textContent = `Página ${currentPage + 1} de ${pages.length}`;
  progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
  coverButton.disabled = currentPage === 0;
  sessionStorage.setItem('story-page', currentPage);
  if (direction) {
    book.classList.remove('turn-next', 'turn-previous');
    void book.offsetWidth;
    book.classList.add(direction === 'next' ? 'turn-next' : 'turn-previous');
  }
}

function changePage(delta) {
  const target = currentPage + delta;
  if (target < 0 || target >= pages.length) return;
  currentPage = target;
  renderPage(delta > 0 ? 'next' : 'previous');
  if (delta > 0) playFairyFlight();
}

function returnToCover() {
  if (currentPage === 0) return;
  currentPage = 0;
  renderPage('previous');
}

function playFairyFlight() {
  const flight = document.createElement('div');
  flight.className = 'magic-flight';
  flight.setAttribute('aria-hidden', 'true');
  flight.innerHTML = '<span class="flying-fairy">🧚</span>';
  book.appendChild(flight);
  const startedAt = performance.now();
  const duration = 2400;

  function leaveSparkle(now) {
    if (!flight.isConnected) return;
    const progress = Math.min((now - startedAt) / duration, 1);
    const sparkle = document.createElement('span');
    const size = 3 + Math.random() * 6;
    sparkle.className = 'fairy-trace';
    sparkle.setAttribute('aria-hidden', 'true');
    sparkle.style.left = `${-18 + progress * (book.clientWidth + 36)}px`;
    sparkle.style.top = `${book.clientHeight * .38 + 28 + Math.sin(progress * Math.PI * 3) * 28 + (Math.random() - .5) * 18}px`;
    sparkle.style.setProperty('--spark-size', `${size}px`);
    sparkle.style.setProperty('--spark-drift', `${(Math.random() - .5) * 45}px`);
    book.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2300);
    if (progress < 1) setTimeout(() => requestAnimationFrame(leaveSparkle), 85);
  }

  requestAnimationFrame(leaveSparkle);
  flight.addEventListener('animationend', event => {
    if (event.animationName === 'fairyFlight') flight.remove();
  });
}

function listen() {
  if (currentPage === PAGE_18_INDEX) {
    if (conversationState !== 'idle') stopSpeaking();
    else startPage18Conversation();
    return;
  }

  if (!narrationAudio.paused && !narrationAudio.ended) {
    stopSpeaking();
    return;
  }

  const pageFile = `audio/narration/page-${String(currentPage + 1).padStart(2, '0')}.wav`;
  narrationAudio.src = pageFile;
  narrationAudio.currentTime = 0;
  listenButton.classList.add('is-speaking');
  listenLabel.textContent = 'Detener';
  narrationAudio.play().catch(() => {
    stopSpeaking();
    listenLabel.textContent = 'No disponible';
  });
}

narrationAudio.addEventListener('ended', () => stopSpeaking());
narrationAudio.addEventListener('error', () => {
  stopSpeaking();
  listenLabel.textContent = 'No disponible';
});

function renderConversationControls() {
  storyText.insertAdjacentHTML('beforeend', `
    <div class="conversation" id="conversation">
      <p class="conversation-status" id="conversationStatus">Usa “Iniciar conversación” arriba para hablar con Lulú.</p>
    </div>
  `);
}

function setConversationStatus(message) {
  const status = document.getElementById('conversationStatus');
  if (status) status.textContent = message;
}

async function startPage18Conversation() {
  if (currentPage !== PAGE_18_INDEX || conversationState !== 'idle') return;
  conversationState = 'connecting';
  conversationStartedAt = Date.now();
  setConversationUi('Conectando con Lulú…', 'Conectando…');

  try {
    microphoneStream = await navigator.mediaDevices.getUserMedia({
      audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    });
    const tokenResponse = await fetch('/api/session', { method: 'POST' });
    if (!tokenResponse.ok) throw new Error(`No se pudo iniciar la sesión (${tokenResponse.status})`);
    const tokenData = await tokenResponse.json();
    const token = findEphemeralToken(tokenData);
    if (!token) throw new Error('La sesión no incluyó un token temporal');

    playbackContext = new AudioContext({ sampleRate: 24000 });
    await playbackContext.resume();
    playbackCursor = playbackContext.currentTime;
    voiceSocket = new WebSocket(
      'wss://api.x.ai/v1/realtime?model=grok-voice-latest',
      [`xai-client-secret.${token}`]
    );
    voiceSocket.addEventListener('open', configureVoiceSession);
    voiceSocket.addEventListener('message', handleVoiceEvent);
    voiceSocket.addEventListener('error', () => failVoiceConversation('No pude conectar con Lulú. Inténtalo otra vez.'));
    voiceSocket.addEventListener('close', () => {
      if (conversationState !== 'idle') failVoiceConversation('La conversación terminó. Puedes volver a intentarlo.');
    });
  } catch (error) {
    console.error(error);
    const denied = error?.name === 'NotAllowedError';
    failVoiceConversation(denied
      ? 'Necesito permiso para usar el micrófono.'
      : 'No pude conectar con Lulú. Inténtalo otra vez.');
  }
}

function findEphemeralToken(value) {
  if (!value || typeof value !== 'object') return null;
  for (const key of ['value', 'token', 'secret', 'client_secret']) {
    if (typeof value[key] === 'string' && value[key].length > 20) return value[key];
    const nested = findEphemeralToken(value[key]);
    if (nested) return nested;
  }
  return null;
}

async function configureVoiceSession() {
  if (!voiceSocket || voiceSocket.readyState !== WebSocket.OPEN || !microphoneStream) return;
  microphoneContext = new AudioContext();
  await microphoneContext.resume();
  waitingForFirstReply = true;
  initialFollowupSent = false;

  voiceSocket.send(JSON.stringify({
    type: 'session.update',
    session: {
      voice: 'eve',
      instructions: `IDENTIDAD Y FORMA DE HABLAR
Eres el hada Lulú, protagonista de "La Poderosa Hada Lulú". La persona que habla contigo es la niña Lulu, la pequeña lectora. El acento distingue sus nombres: tú eres Lulú y la lectora es Lulu. Nunca llames "Lulú" a la niña. Habla siempre en español mexicano, con la voz de un hada cálida, alegre y cariñosa. Usa frases breves y vocabulario apropiado para una niña pequeña. Mantente en personaje.

CANON DEL CUENTO HASTA ESTA PÁGINA
- Las hadas son diminutas, aproximadamente del tamaño de un dedo. Tienen alas brillantes como mariposas y viven en un bosque encantado muy lejos de las casas de los niños.
- Las hadas pueden volar muy rápido, hablar con animales, hacerse invisibles y hacer crecer flores y plantas con sus varitas.
- Tú, el hada Lulú, eres una de las hadas más poderosas y la que vuela más rápido.
- Tienes un tigrito especial. Cuando le guiñas un ojo, se transforma en un enorme tigre protector cuyo rugido espanta a los malos.
- Cada noche las hadas llevan polvo de hada mágico y brillante a los niños dormidos para que tengan sueños felices y tranquilos.
- Los duendes son criaturas pequeñas, verdes, de orejas puntiagudas, nariz redonda y sonrisa traviesa. No son malos de verdad: son muy traviesos y actúan sin pensar.
- Una noche escuchaste a cuatro duendes. Planeaban robar todo el polvo de hada, llevarlo a otros duendes del bosque y lanzarlo al aire como una nube brillante. Uno bromeó con lavarse las pompis con él y los cuatro se rieron e hicieron sonidos de pedito.
- Comprendiste que, sin el polvo, las hadas no podrían llevar sueños felices a los niños. Volaste a buscar a tus amigas, las hadas Emma y Raquel.
- Al llegar al castillo encontraron abierto y vacío el cofre del polvo de hada.
- Emma vio humo de una fogata que los duendes dejaron encendida. La apagó con su hechizo de lluvia mágica.
- Raquel vio a un grupo enorme de duendes esperando a los cuatro ladrones. Los atrapó con enredaderas mágicas.
- Tú seguiste el rastro brillante hasta los cuatro ladrones. Amenazaron con romper el saco si usabas la varita. Dijiste que no usarías magia y le guiñaste un ojo al tigrito. Al convertirse en un enorme tigre y rugir, los ladrones huyeron y recuperaste el saco.
- Volviste con Emma y Raquel. Los cuatro ladrones llegaron corriendo y también quedaron atrapados por las enredaderas.
- Las tres se preguntaron cómo impedir que los duendes regresaran ahora que conocían el camino al castillo.
- En esta página explicas que necesitan un hechizo muy poderoso que solo funciona si las tres hadas y la niña Lulu respiran juntas. Tu meta es conversar con la niña Lulu hasta que diga que está lista para ayudar.

REGLAS DE FIDELIDAD
Trata los puntos anteriores como hechos inmutables. No cambies personajes, relaciones, poderes, lugares ni acontecimientos. No inventes recuerdos o sucesos y los presentes como parte del cuento. Si te preguntan por un dato que el canon no establece, responde con honestidad, por ejemplo: "Eso todavía no lo cuenta nuestra historia". Puedes invitar a imaginar una posibilidad, pero debes presentarla claramente como un juego o una idea nueva, nunca como algo que ya ocurrió. No adelantes el desenlace. No contradigas lo que diga la niña sobre sus sentimientos; responde con empatía.

CONVERSACIÓN EN ESTA PÁGINA
Conversa de manera abierta sobre el cuento, la magia, los personajes, lo que pasó y los sentimientos o preguntas de la lectora. Después de responder, guía suavemente la conversación hacia preguntarle si está lista para ayudar con el hechizo. Cuando diga que está lista, responde con entusiasmo, confirma claramente que ya pueden hacer el hechizo juntas y sugiérele pasar a la siguiente página.

SEGURIDAD
Nunca pidas ni repitas apellidos, direcciones, escuela, teléfono, ubicación, contraseñas ni otros datos personales. Si comparte uno, dile amablemente que no necesita contarte información privada. No uses herramientas. No entres en temas sexuales, violentos, peligrosos o para adultos. Si pregunta algo inapropiado o preocupante, responde brevemente y sugiere hablar con un adulto de confianza. No digas que eres una IA.`,
      reasoning: { effort: 'none' },
      turn_detection: { type: 'server_vad', threshold: 0.72 },
      audio: {
        input: {
          format: { type: 'audio/pcm', rate: microphoneContext.sampleRate },
          transcription: { language_hint: 'es-MX', keyterms: ['Lulú', 'hada', 'hechizo', 'lista'] }
        },
        output: { format: { type: 'audio/pcm', rate: 24000 } }
      }
    }
  }));

  startMicrophoneStreaming();
  voiceSocket.send(JSON.stringify({
    type: 'conversation.item.create',
    item: {
      type: 'force_message',
      role: 'assistant',
      interruptible: false,
      content: [{
        type: 'output_text',
        text: 'Necesitamos hacer un hechizo muy poderoso. Pero solo funciona si las tres hadas… ¡y la niña Lulu!… respiran juntas. ¿Nos ayudas, niña Lulu?'
      }]
    }
  }));
  conversationState = 'active';
  setConversationUi('Lulú está hablando… Después puedes responderle.', 'Terminar');
}

function startMicrophoneStreaming() {
  microphoneSource = microphoneContext.createMediaStreamSource(microphoneStream);
  microphoneProcessor = microphoneContext.createScriptProcessor(4096, 1, 1);
  const silentGain = microphoneContext.createGain();
  silentGain.gain.value = 0;
  microphoneProcessor.onaudioprocess = event => {
    if (voiceSocket?.readyState !== WebSocket.OPEN || conversationState !== 'active') return;
    if (Date.now() - conversationStartedAt > 5 * 60 * 1000) {
      endVoiceConversation('La conversación terminó después de cinco minutos.');
      return;
    }
    const samples = event.inputBuffer.getChannelData(0);
    const pcm = new Int16Array(samples.length);
    for (let i = 0; i < samples.length; i += 1) {
      const sample = Math.max(-1, Math.min(1, samples[i]));
      pcm[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
    }
    voiceSocket.send(JSON.stringify({ type: 'input_audio_buffer.append', audio: bytesToBase64(new Uint8Array(pcm.buffer)) }));
  };
  microphoneSource.connect(microphoneProcessor);
  microphoneProcessor.connect(silentGain);
  silentGain.connect(microphoneContext.destination);
}

function handleVoiceEvent(message) {
  if (typeof message.data !== 'string') return;
  let event;
  try { event = JSON.parse(message.data); } catch { return; }
  if (event.type === 'response.output_audio.delta' || event.type === 'response.audio.delta') {
    const audio = event.delta || event.audio;
    if (audio) queuePcmAudio(audio);
    setConversationStatus('Lulú está respondiendo…');
  } else if (event.type === 'input_audio_buffer.speech_started') {
    waitingForFirstReply = false;
    clearTimeout(initialFollowupTimer);
    initialFollowupTimer = null;
    setConversationStatus('Lulú te está escuchando…');
  } else if (event.type === 'input_audio_buffer.speech_stopped') {
    setConversationStatus('Lulú está pensando…');
  } else if (event.type === 'response.done') {
    setConversationStatus('Te escucho… habla con Lulú.');
    scheduleInitialFollowup();
  } else if (event.type === 'error') {
    console.error('xAI voice error', event);
    failVoiceConversation('Lulú tuvo un problema para escucharte. Inténtalo otra vez.');
  }
}

function scheduleInitialFollowup() {
  if (!waitingForFirstReply || initialFollowupSent || conversationState !== 'active') return;
  clearTimeout(initialFollowupTimer);
  const queuedAudioMs = playbackContext
    ? Math.max(0, playbackCursor - playbackContext.currentTime) * 1000
    : 0;
  initialFollowupTimer = setTimeout(() => {
    if (!waitingForFirstReply || initialFollowupSent || voiceSocket?.readyState !== WebSocket.OPEN) return;
    initialFollowupSent = true;
    voiceSocket.send(JSON.stringify({
      type: 'conversation.item.create',
      item: {
        type: 'force_message',
        role: 'assistant',
        interruptible: false,
        content: [{
          type: 'output_text',
          text: 'Sí, ¡a ti! Estamos hablando contigo, nuestra pequeña lectora. Sin tu ayuda, el hechizo no funcionará.'
        }]
      }
    }));
    setConversationStatus('Lulú te anima a responder…');
  }, queuedAudioMs + 6500);
}

function queuePcmAudio(base64Audio) {
  if (!playbackContext) return;
  const bytes = base64ToBytes(base64Audio);
  const frames = Math.floor(bytes.byteLength / 2);
  const samples = new Float32Array(frames);
  const view = new DataView(bytes.buffer, bytes.byteOffset, frames * 2);
  for (let i = 0; i < frames; i += 1) samples[i] = view.getInt16(i * 2, true) / 32768;
  const buffer = playbackContext.createBuffer(1, frames, 24000);
  buffer.copyToChannel(samples, 0);
  const source = playbackContext.createBufferSource();
  source.buffer = buffer;
  source.connect(playbackContext.destination);
  playbackCursor = Math.max(playbackCursor, playbackContext.currentTime + 0.02);
  source.start(playbackCursor);
  playbackCursor += buffer.duration;
}

function bytesToBase64(bytes) {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function setConversationUi(status, buttonText) {
  setConversationStatus(status);
  listenButton.classList.toggle('is-speaking', conversationState !== 'idle');
  listenLabel.textContent = conversationState === 'idle' ? 'Iniciar conversación' : buttonText;
}

function failVoiceConversation(message) {
  endVoiceConversation(message);
}

function endVoiceConversation(message = 'Usa “Iniciar conversación” arriba para hablar con Lulú.') {
  clearTimeout(initialFollowupTimer);
  initialFollowupTimer = null;
  waitingForFirstReply = false;
  initialFollowupSent = false;
  const socket = voiceSocket;
  voiceSocket = null;
  if (socket && socket.readyState < WebSocket.CLOSING) socket.close();
  microphoneProcessor?.disconnect();
  microphoneSource?.disconnect();
  microphoneProcessor = null;
  microphoneSource = null;
  microphoneStream?.getTracks().forEach(track => track.stop());
  microphoneStream = null;
  microphoneContext?.close().catch(() => {});
  playbackContext?.close().catch(() => {});
  microphoneContext = null;
  playbackContext = null;
  playbackCursor = 0;
  conversationState = 'idle';
  setConversationUi(message, 'Iniciar conversación');
}

function openImageViewer() {
  const mainImage = illustrationWrap.querySelector('img');
  if (!mainImage) return;
  viewerImage.src = mainImage.src;
  viewerImage.alt = mainImage.alt;
  imageViewer.hidden = false;
  document.body.style.overflow = 'hidden';
  viewerClose.focus();
}

function closeImageViewer() {
  imageViewer.hidden = true;
  viewerImage.src = '';
  document.body.style.overflow = '';
  illustrationWrap.querySelector('.expand-image')?.focus();
}

previousButton.addEventListener('click', () => changePage(-1));
nextButton.addEventListener('click', () => changePage(1));
coverButton.addEventListener('click', returnToCover);
listenButton.addEventListener('click', listen);
illustrationWrap.addEventListener('click', event => {
  if (event.target.closest('.expand-image')) openImageViewer();
});
viewerClose.addEventListener('click', closeImageViewer);
imageViewer.addEventListener('click', event => {
  if (event.target === imageViewer) closeImageViewer();
});
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') changePage(-1);
  if (event.key === 'ArrowRight') changePage(1);
  if (event.key === 'Escape') {
    if (!imageViewer.hidden) closeImageViewer();
    else stopSpeaking();
  }
});
book.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
book.addEventListener('touchend', event => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 50) changePage(distance < 0 ? 1 : -1);
}, { passive: true });

renderPage();
