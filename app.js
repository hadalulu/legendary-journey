const asset = name => `assets/${name}.webp`;

const pages = [
  { cover: true, images: [asset('F2E6B3AA-11BA-466E-96E2-D80279D4CEEF')], text: ['La Poderosa Hada Lulú'] },
  { images: [asset('66320DD7-CA7E-43DF-B396-1B2FA0E5B51A_1_102_o')], text: ['Había una vez un hada muy hermosa y muy poderosa llamada <strong>Lulú</strong>.'] },
  { images: [asset('AC45510D-38CA-4632-B3F9-EA92582093E9')], text: ['Las hadas son muy pequeñitas, más o menos del tamaño de un dedo. Tienen alas brillantes como las de una mariposa y viven en un bosque encantado, muy, muy lejos de las casas de los niños. Las hadas tienen muchos poderes mágicos: pueden volar muy rápido, hablar con los animalitos, hacerse invisibles y, con un movimiento de su varita, hacer que las flores y las plantas crezcan al instante.'] },
  { images: [asset('A018819A-C4F0-462F-902A-7E1DBC558779_1_102_o')], text: ['El hada Lulú era una de las hadas más poderosas y volaba más rápido que todas las demás.', 'Además, tenía un pequeño tigre muy especial. Cuando Lulú le hacía un guiño, el tigrito crecía de repente y se convertía en un enorme tigre protector. Con un gran rugido espantaba a los malos, y todos salían corriendo.'] },
  { images: [asset('955874F8-E9D7-44E6-9D17-48559E3A672D')], text: ['¿Sabes quiénes son los malos que siempre enojan a las hadas, Lulu? Son los duendes.', 'Los duendes son unas criaturitas pequeñitas, del tamaño de un peluche. Tienen la piel verde, orejas grandes y puntiagudas, una nariz redonda y una sonrisa traviesa. Les encanta hacer bromas, como esconder un calcetín, mover un juguete de lugar o hacer mucho desorden. No son malos de verdad. Solo son muy, muy traviesos y casi nunca piensan antes de hacer una travesura.'] },
  { images: [asset('3751741E-76B6-479E-AF39-E9022A243227')], text: ['Cada noche, las hadas salen volando de su bosque encantado para visitar, en secreto, las casas de los niños mientras duermen. Llevan consigo un polvito mágico y brillante llamado <strong>polvo de hada</strong>, que ayuda a que los niños tengan sueños felices y tranquilos.', 'Entran muy despacito en cada habitación y dejan caer un poquito de polvo sobre los niños dormidos. Entonces, los niños sueñan con aventuras, arcoíris, dinosaurios amistosos y cachorritos juguetones.'] },
  { images: [asset('8B378617-54FE-41E8-8BA8-B7F8E54E7D5E')], text: ['Una noche, justo cuando la hada Lulú iba a salir del bosque encantado, escuchó unas risitas detrás de un árbol.', '—Je, je, je...', 'Lulú se acercó muy despacito para escuchar.'] },
  { images: [asset('773B9268-5C08-4E60-A3A0-DE0ED721DB3A')], text: ['¡Eran cuatro duendes!', '—¡Hoy vamos a hacer la travesura más grande de todas! —dijo uno riéndose.', '—¡Vamos a llevarnos todo el polvo de hada! —dijo otro.', '—¡Después lo llevaremos a los otros duendes que nos están esperando en el bosque, y lo vamos a aventar por los aires para hacer una nube brillante! ¡Je, je, je!', '—¡Y yo me voy a lavar las pompis con el polvo de hada! —dijo un duende muy orgulloso.', 'Los otros empezaron a reírse.', '—¡Prrrrrt!', '—¡Puaj! ¡Te echaste un pedito!', '—¡Je, je, je! ¡Otro, otro!', '—¡Prrrrrt!', '—¡El próximo pedito será con polvo mágico! ¡Je, je, je!', 'Los cuatro duendes se morían de la risa.'] },
  { images: [asset('2C53A67E-BB64-4C82-850C-55E6BA223CEF_1_102_o')], text: ['Lulú abrió mucho los ojos.', '—¡Oh, no! Si se llevan todo el polvo de hada, las hadas ya no podrán llevar sueños felices a los niños en las próximas noches.', 'Pensó un momento.', '—¡Ya sé! Yo soy la hada más rápida. Iré por ayuda.', 'Y salió volando tan, tan rápido que parecía una estrella cruzando el cielo.'] },
  { images: [asset('8B8E1A37-A06F-44AC-A2CE-83D718C52B06')], text: ['Muy pronto encontró a sus amigas, las hadas Emma y Raquel.', '—¡Los duendes quieren llevarse el polvo mágico! —dijo Lulú.', '—¡Vamos! —respondieron las tres al mismo tiempo.', 'Las tres hadas llegaron al castillo tan rápido como pudieron y corrieron hasta la sala donde guardaban el polvo de hada.'] },
  { images: [asset('51D97B32-F698-4DF6-9B6C-8B287A742261')], text: ['—¡Ay, no! —exclamó la hada Lulú.', 'El gran cofre del polvo de hada estaba abierto.', '¡Y estaba completamente vacío!', 'Por un momento, las tres hadas se quedaron en silencio.'] },
  { images: [asset('5103FEDB-DBBF-4FA7-B8B0-51C68836682A')], text: ['Emma señaló por la ventana.', '—¡Miren! ¡Sale humo del bosque! Si no lo apagamos, podría convertirse en un gran incendio. ¡Yo iré!', 'Raquel miró hacia una colina cercana.', '—¡Y allá hay un grupo enorme de duendes esperando a los cuatro ladrones! ¡Yo voy a detenerlos!', 'Lulú vio un caminito de polvo brillante que se perdía entre los árboles.', '—Yo seguiré el rastro, recuperaré el polvo de hada y luego nos reuniremos.', 'Y las tres salieron volando, cada una hacia su importante misión.'] },
  { images: [asset('04B15042-D4FD-4573-A8FC-B4FE231262DE')], text: ['Emma siguió el humo hasta encontrar una fogata que los duendes habían dejado encendida.', 'Levantó su varita.', '—¡Lluvia mágica!', 'Al instante comenzó a llover.', '¡Plin, plin, plin!', 'En pocos segundos, el fuego se apagó.', '—¡El bosque está a salvo! —dijo Emma.'] },
  { images: [asset('F19406C9-8DAF-4869-B28B-BD8B60B5B972')], text: ['Mientras tanto, Raquel encontró al gran grupo de duendes esperando a los ladrones.', 'Levantó su varita.', '—¡Enredaderas, crezcan ahora!', 'Al instante, unas enredaderas crecieron del suelo y atraparon a todos los duendes.', '—¡Listo! ¡Ahora los ladrones no tendrán dónde esconderse! —dijo Raquel.'] },
  { images: [asset('BBBC5351-F277-4144-90B8-4B03AE8D7838')], text: ['Al mismo tiempo, Lulú siguió el caminito de polvo brillante y encontró a los cuatro duendes que llevaban el saco de polvo de hada.', '—¡Ni se te ocurra usar tu magia! Si levantas tu varita, romperemos el saco y todo el polvo se perderá.', 'Lulú sonrió.', '—Muy bien. Entonces… no usaré mi magia.', 'Los duendes empezaron a reír.', '—¡Je, je, je!'] },
  { images: [asset('17265E38-8F97-455D-8BE9-1ECBCA007E41')], text: ['Pero Lulú le guiñó un ojo a su tigrito.', 'El tigrito dio un saltito.', '<strong>¡Puf! En un abrir y cerrar de ojos se convirtió en un enorme tigre protector.</strong>', '—¡ROOOAAAR!', 'Los duendes dieron un brinco del susto y salieron corriendo, dejando el saco de polvo de hada en el suelo.', 'Lulú lo recogió y sonrió.', '—¡Lo recuperamos!'] },
  { images: [asset('6122E77E-2D77-4CCA-98B9-09248F9C21B0'), asset('90F4B904-7CA9-4468-8112-81A25E72DDDE')], text: ['Lulú voló hasta la colina donde estaban Emma y Raquel. Allí, Raquel había atrapado al gran grupo de duendes.', 'Poco después llegaron corriendo los cuatro ladrones y las enredaderas también los atraparon.', '—¡Lo logramos! —dijo Lulú, enseñando el saco de polvo de hada.', '—¡Y el bosque está a salvo! —añadió Emma.', 'Pero Lulú se quedó pensativa.', '—Ahora que conocen el camino al castillo… ¿qué podemos hacer para que no vuelvan?'] },
  { images: [asset('1A1624A9-4AE4-4098-96DA-D378CF3E9ED7')], text: ['—Necesitamos hacer un hechizo muy poderoso. Pero solo funciona si las tres hadas… ¡y la niña Lulú!… respiran juntas.', '¿Nos ayudas, niña Lulú?'] },
  { images: [asset('215C9F58-5F79-448C-AD06-22364547AA95')], text: ['Primero imaginemos que olemos una flor muy bonita.', 'Respira hondo…', 'Uno… dos… tres…', 'Ahora sopla una velita.', 'Fuuuu…', 'Otra vez.', 'Uno… dos… tres…', 'Fuuuu…', 'Y una última vez.', 'Uno… dos… tres…', 'Fuuuu…'] },
  { images: [asset('B92D705D-C72F-4307-9002-1D464F2184FD')], text: ['Las tres hadas apuntaron sus varitas al cielo.', '—¡Luz de luna, brillo de estrella, que los duendes olviden el camino al castillo y recuerden siempre el camino a su hogar!', '✨ ¡Zas! ✨'] },
  { images: [asset('3A1A63B6-E6C9-4299-B8CD-02E5349AE34C')], text: ['Los duendes parpadearon.', '—¿Qué estábamos haciendo?', '—¡No me acuerdo!', '—¡Vamos a casa!', 'Y se fueron riendo por el bosque.'] },
  { images: [asset('1FC8DD50-90B7-4614-8403-69430949CF2B')], text: ['Lulú guardó el polvo de hada en su lugar.', 'Después, las tres hadas salieron volando para llevar sueños felices a los niños.'] },
  { images: [asset('032F252C-834F-4A17-9EE4-5A63E375C709_1_102_o')], text: ['Lulú miró hacia el cielo y sonrió.', '—Misión cumplida.', 'Y colorín colorado… ¡este cuento se ha acabado!'] }
];

const book = document.getElementById('book');
const illustrationWrap = document.getElementById('illustrationWrap');
const storyText = document.getElementById('storyText');
const pageNumber = document.getElementById('pageNumber');
const progressBar = document.getElementById('progressBar');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const listenButton = document.getElementById('listenButton');
const listenLabel = document.getElementById('listenLabel');
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerClose = document.getElementById('viewerClose');
const narrationAudio = new Audio();
narrationAudio.preload = 'metadata';
const PAGE_18_INDEX = 17;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let currentPage = Number(sessionStorage.getItem('story-page') || 0);
if (currentPage < 0 || currentPage >= pages.length) currentPage = 0;
let touchStartX = 0;
let recognition = null;
let conversationState = 'idle';

function stopSpeaking(cancelConversation = true) {
  narrationAudio.pause();
  narrationAudio.currentTime = 0;
  window.speechSynthesis?.cancel();
  if (cancelConversation) {
    recognition?.abort();
    recognition = null;
    conversationState = 'idle';
  }
  listenButton.classList.remove('is-speaking');
  listenLabel.textContent = currentPage === PAGE_18_INDEX ? 'Hablar con Lulú' : 'Escuchar';
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
  pageNumber.textContent = `Página ${currentPage + 1} de ${pages.length}`;
  progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
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

narrationAudio.addEventListener('ended', () => {
  if (currentPage === PAGE_18_INDEX && conversationState === 'prompting') {
    narrationAudio.currentTime = 0;
    listenButton.classList.remove('is-speaking');
    beginListeningForReady();
  } else {
    stopSpeaking();
  }
});
narrationAudio.addEventListener('error', () => {
  stopSpeaking();
  listenLabel.textContent = 'No disponible';
});

function renderConversationControls() {
  storyText.insertAdjacentHTML('beforeend', `
    <div class="conversation" id="conversation">
      <p class="conversation-status" id="conversationStatus">Toca el botón para hablar con Lulú.</p>
      <div class="conversation-actions">
        <button class="conversation-button" id="conversationButton" type="button">Hablar con Lulú</button>
        <button class="ready-button" id="readyButton" type="button">¡Estoy lista!</button>
      </div>
    </div>
  `);
  document.getElementById('conversationButton').addEventListener('click', startPage18Conversation);
  document.getElementById('readyButton').addEventListener('click', () => respondToReader('estoy lista'));
}

function setConversationStatus(message) {
  const status = document.getElementById('conversationStatus');
  if (status) status.textContent = message;
}

function startPage18Conversation() {
  if (currentPage !== PAGE_18_INDEX || conversationState !== 'idle') return;
  conversationState = 'prompting';
  setConversationStatus('Lulú está hablando…');
  listenButton.classList.add('is-speaking');
  listenLabel.textContent = 'Detener';
  const opening = new SpeechSynthesisUtterance('Necesitamos hacer un hechizo muy poderoso. Pero solo funciona si las tres hadas… ¡y la niña Lulú!… respiran juntas. ¿Nos ayudas, niña Lulú?');
  opening.lang = 'es-MX';
  opening.rate = 0.88;
  opening.pitch = 1.12;
  opening.onend = () => {
    if (currentPage !== PAGE_18_INDEX || conversationState !== 'prompting') return;
    listenButton.classList.remove('is-speaking');
    beginListeningForReady();
  };
  opening.onerror = () => {
    conversationState = 'idle';
    stopSpeaking();
    setConversationStatus('No se pudo reproducir la voz. Puedes tocar “¡Estoy lista!”.');
  };
  window.speechSynthesis.speak(opening);
}

function beginListeningForReady() {
  if (currentPage !== PAGE_18_INDEX) return;
  if (!SpeechRecognition) {
    conversationState = 'idle';
    listenLabel.textContent = 'Hablar con Lulú';
    setConversationStatus('Tu navegador no puede escuchar la respuesta. Toca “¡Estoy lista!”.');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'es-MX';
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  conversationState = 'listening';
  listenButton.classList.add('is-speaking');
  listenLabel.textContent = 'Escuchando…';
  setConversationStatus('Te escucho… ¿estás lista?');

  recognition.onresult = event => {
    const replies = Array.from(event.results[0], result => result.transcript).join(' ');
    recognition = null;
    respondToReader(replies);
  };
  recognition.onerror = event => {
    recognition = null;
    conversationState = 'idle';
    listenButton.classList.remove('is-speaking');
    listenLabel.textContent = 'Intentar otra vez';
    const denied = event.error === 'not-allowed' || event.error === 'service-not-allowed';
    setConversationStatus(denied
      ? 'Necesito permiso para usar el micrófono. También puedes tocar “¡Estoy lista!”.'
      : 'No alcancé a escucharte. Toca “Intentar otra vez” o “¡Estoy lista!”.');
  };
  recognition.onend = () => {
    if (conversationState === 'listening') {
      recognition = null;
      conversationState = 'idle';
      listenButton.classList.remove('is-speaking');
      listenLabel.textContent = 'Intentar otra vez';
      setConversationStatus('No alcancé a escucharte. ¿Quieres intentarlo otra vez?');
    }
  };
  recognition.start();
}

function respondToReader(rawReply) {
  if (currentPage !== PAGE_18_INDEX) return;
  recognition?.abort();
  recognition = null;
  const reply = rawReply.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const isReady = /\b(si|sip|lista|listo|preparada|preparado|claro|vamos|ya)\b/.test(reply);
  const response = isReady
    ? '¡Maravilloso! Sabía que podía contar contigo. ¡Ya estamos listas para hacer el hechizo!'
    : 'Está bien. Respira conmigo cuando estés lista. ¿Quieres ayudar a las hadas?';

  conversationState = 'responding';
  setConversationStatus(isReady ? '✨ ¡Lulú escuchó que estás lista!' : 'Lulú quiere asegurarse de que estés lista.');
  listenButton.classList.add('is-speaking');
  listenLabel.textContent = 'Lulú responde…';

  const utterance = new SpeechSynthesisUtterance(response);
  utterance.lang = 'es-MX';
  utterance.rate = 0.9;
  utterance.pitch = 1.15;
  utterance.onend = () => {
    if (currentPage !== PAGE_18_INDEX) return;
    if (isReady) {
      conversationState = 'idle';
      listenButton.classList.remove('is-speaking');
      listenLabel.textContent = 'Hablar otra vez';
      document.getElementById('nextButton')?.focus();
    } else {
      beginListeningForReady();
    }
  };
  utterance.onerror = () => {
    conversationState = 'idle';
    listenButton.classList.remove('is-speaking');
    listenLabel.textContent = 'Intentar otra vez';
  };
  window.speechSynthesis.speak(utterance);
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
