const asset = name => `assets/${name}.webp`;

const pages = [
  { cover: true, images: [asset('F2E6B3AA-11BA-466E-96E2-D80279D4CEEF')], text: ['La Poderosa Hada Lulú'] },
  { images: [asset('AC45510D-38CA-4632-B3F9-EA92582093E9')], text: ['Había una vez un hada muy hermosa y muy poderosa llamada <strong>Lulú</strong>.', 'Las hadas son muy pequeñitas, más o menos del tamaño de un dedo. Tienen alas brillantes como las de una mariposa y viven en un bosque encantado, muy, muy lejos de las casas de los niños. Las hadas tienen muchos poderes mágicos: pueden volar muy rápido, hablar con los animalitos, hacerse invisibles y, con un movimiento de su varita, hacer que las flores y las plantas crezcan al instante.'] },
  { images: [asset('A018819A-C4F0-462F-902A-7E1DBC558779_1_102_o')], text: ['El hada Lulú era una de las hadas más poderosas y volaba más rápido que todas las demás.', 'Además, tenía un pequeño tigre muy especial. Cuando Lulú le hacía un guiño, el tigrito crecía de repente y se convertía en un enorme tigre protector. Con un gran rugido espantaba a los malos, y todos salían corriendo.'] },
  { images: [asset('955874F8-E9D7-44E6-9D17-48559E3A672D')], text: ['¿Sabes quiénes son los malos que siempre enojan a las hadas, Lulu? Son los duendes.', 'Los duendes son unas criaturitas pequeñitas, del tamaño de un peluche. Tienen la piel verde, orejas grandes y puntiagudas, una nariz redonda y una sonrisa traviesa. Les encanta hacer bromas, como esconder un calcetín, mover un juguete de lugar o hacer mucho desorden. No son malos de verdad. Solo son muy, muy traviesos y casi nunca piensan antes de hacer una travesura.'] },
  { images: [asset('3751741E-76B6-479E-AF39-E9022A243227')], text: ['Cada noche, las hadas salen volando de su bosque encantado para visitar, en secreto, las casas de los niños mientras duermen. Llevan consigo un polvito mágico y brillante llamado <strong>polvo de hada</strong>, que ayuda a que los niños tengan sueños felices y tranquilos.', 'Entran muy despacito en cada habitación y dejan caer un poquito de polvo sobre los niños dormidos. Entonces, los niños sueñan con aventuras, arcoíris, dinosaurios amistosos y cachorritos juguetones.'] },
  { images: [asset('8B378617-54FE-41E8-8BA8-B7F8E54E7D5E')], text: ['Una noche, justo cuando la hada Lulú iba a salir del bosque encantado, escuchó unas risitas detrás de un árbol.', '—Je, je, je...', 'Lulú se acercó muy despacito para escuchar.'] },
  { images: [asset('773B9268-5C08-4E60-A3A0-DE0ED721DB3A')], text: ['Eran cuatro duendes.', '—¡Hoy vamos a hacer la travesura más grande de todas! —dijo uno riéndose.', '—¡Vamos a llevarnos todo el polvo de hada! —dijo otro.', '—¡Después lo llevaremos a los otros duendes que nos esperan en el bosque y lo aventaremos por los aires para hacer una nube brillante! ¡Je, je, je!', '—¡Y yo me voy a lavar las pompis con el polvo de hada! —dijo un duende muy orgulloso.', 'Los cuatro duendes se morían de la risa.'] },
  { images: [asset('2C53A67E-BB64-4C82-850C-55E6BA223CEF_1_102_o')], text: ['Lulú abrió mucho los ojos.', '—¡Oh, no! Si se llevan todo el polvo de hada, las hadas ya no podrán llevar sueños felices a los niños en las próximas noches.', 'Pensó un momento.', '—¡Ya sé! Yo soy la hada más rápida. Iré por ayuda.', 'Y salió volando tan, tan rápido que parecía una estrella cruzando el cielo.'] },
  { images: [asset('8B8E1A37-A06F-44AC-A2CE-83D718C52B06')], text: ['Muy pronto encontró a sus amigas, las hadas Emma y Raquel.', '—¡Los duendes quieren llevarse el polvo mágico! —dijo Lulú.', '—¡Vamos! —respondieron las tres al mismo tiempo.', 'Las tres hadas llegaron al castillo tan rápido como pudieron y corrieron hasta la sala donde guardaban el polvo de hada.'] },
  { images: [asset('51D97B32-F698-4DF6-9B6C-8B287A742261')], text: ['—¡Ay, no! —exclamó la hada Lulú.', 'El gran cofre del polvo de hada estaba abierto.', '¡Y estaba completamente vacío!', 'Por un momento, las tres hadas se quedaron en silencio.'] },
  { images: [asset('5103FEDB-DBBF-4FA7-B8B0-51C68836682A')], text: ['Emma señaló por la ventana.', '—¡Miren! ¡Sale humo del bosque! Si no lo apagamos, podría convertirse en un gran incendio. ¡Yo iré!', 'Raquel miró hacia una colina cercana.', '—¡Y allá hay un grupo enorme de duendes esperando a los cuatro ladrones! ¡Yo voy a detenerlos!', 'Lulú vio un caminito de polvo brillante que se perdía entre los árboles.', '—Yo seguiré el rastro, recuperaré el polvo de hada y luego nos reuniremos.', 'Y las tres salieron volando, cada una hacia su importante misión.'] },
  { images: [asset('04B15042-D4FD-4573-A8FC-B4FE231262DE')], text: ['Emma siguió el humo hasta encontrar una fogata que los duendes habían dejado encendida.', 'Levantó su varita.', '—¡Lluvia mágica!', 'Al instante comenzó a llover.', '¡Plin, plin, plin!', 'En pocos segundos, el fuego se apagó.', '—¡El bosque está a salvo! —dijo Emma.'] },
  { images: [asset('F19406C9-8DAF-4869-B28B-BD8B60B5B972')], text: ['Mientras tanto, Raquel encontró al gran grupo de duendes esperando a los ladrones.', 'Levantó su varita.', '—¡Enredaderas, crezcan ahora!', 'Al instante, unas enredaderas crecieron del suelo y atraparon a todos los duendes.', '—¡Listo! ¡Ahora los ladrones no tendrán dónde esconderse! —dijo Raquel.'] },
  { images: [asset('BBBC5351-F277-4144-90B8-4B03AE8D7838')], text: ['Al mismo tiempo, Lulú siguió el caminito de polvo brillante y encontró a los cuatro duendes que llevaban el saco de polvo de hada.', '—¡Ni se te ocurra usar tu magia! Si levantas tu varita, romperemos el saco y todo el polvo se perderá.', 'Lulú sonrió.', '—Muy bien. Entonces… no usaré mi magia.', 'Los duendes empezaron a reír.', '—¡Je, je, je!'] },
  { images: [asset('17265E38-8F97-455D-8BE9-1ECBCA007E41')], text: ['Pero Lulú le guiñó un ojo a su tigrito.', 'El tigrito dio un saltito.', '<strong>¡Puf! En un abrir y cerrar de ojos se convirtió en un enorme tigre protector.</strong>', '—¡ROOOAAAR!', 'Los duendes dieron un brinco del susto y salieron corriendo, dejando el saco de polvo de hada en el suelo.', 'Lulú lo recogió y sonrió.', '—¡Lo recuperamos!'] },
  { images: [asset('6122E77E-2D77-4CCA-98B9-09248F9C21B0'), asset('90F4B904-7CA9-4468-8112-81A25E72DDDE')], text: ['Lulú voló hasta la colina donde estaban Emma y Raquel. Allí, Raquel había atrapado al gran grupo de duendes.', 'Poco después llegaron corriendo los cuatro ladrones y las enredaderas también los atraparon.', '—¡Lo logramos! —dijo Lulú, enseñando el saco de polvo de hada.', '—¡Y el bosque está a salvo! —añadió Emma.', 'Pero Lulú se quedó pensativa.', '—Ahora que conocen el camino al castillo… ¿qué podemos hacer para que no vuelvan?'] },
  { images: [asset('1A1624A9-4AE4-4098-96DA-D378CF3E9ED7')], text: ['—Necesitamos hacer un hechizo muy poderoso. Pero solo funciona si las tres hadas… ¡y la niña Lulu!… respiran juntas.', '¿Nos ayudas, niña Lulu?', 'Sí, <strong>¡a ti!</strong> Estamos hablando contigo, nuestra pequeña lectora. Sin tu ayuda, el hechizo no funcionará.'] },
  { images: [asset('215C9F58-5F79-448C-AD06-22364547AA95')], text: ['Primero imaginemos que olemos una flor muy bonita.', 'Respira hondo…', 'Uno… dos… tres…', 'Ahora sopla una velita.', 'Fuuuu…', 'Otra vez.', 'Uno… dos… tres…', 'Fuuuu…', 'Y una última vez.', 'Uno… dos… tres…', 'Fuuuu…'] },
  { images: [asset('B92D705D-C72F-4307-9002-1D464F2184FD')], text: ['Las tres hadas apuntaron sus varitas al cielo.', '—¡Luz de luna, brillo de estrella, que los duendes olviden el camino al castillo y recuerden siempre el camino a su hogar!', '✨ ¡Zas! ✨'] },
  { images: [asset('3A1A63B6-E6C9-4299-B8CD-02E5349AE34C')], text: ['Los duendes parpadearon.', '—¿Qué estábamos haciendo?', '—¡No me acuerdo!', '—¡Vamos a casa!', 'Y se fueron riendo por el bosque.'] },
  { images: [asset('1FC8DD50-90B7-4614-8403-69430949CF2B')], text: ['Lulú guardó el polvo de hada en su lugar.', 'Después, las tres hadas salieron volando para llevar sueños felices a los niños.'] },
  { images: [asset('032F252C-834F-4A17-9EE4-5A63E375C709_1_102_o')], text: ['Lulú miró hacia el cielo y sonrió.', '—Misión cumplida.', 'Y colorín colorado… ¡este cuento se ha acabado!'] }
];

const book = document.getElementById('book');
const illustrationWrap = document.getElementById('illustrationWrap');
const storyText = document.getElementById('storyText');
const chapter = document.getElementById('chapter');
const pageNumber = document.getElementById('pageNumber');
const progressBar = document.getElementById('progressBar');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const listenButton = document.getElementById('listenButton');
const listenLabel = document.getElementById('listenLabel');

let currentPage = Number(sessionStorage.getItem('story-page') || 0);
if (currentPage < 0 || currentPage >= pages.length) currentPage = 0;
let touchStartX = 0;

function stopSpeaking() {
  speechSynthesis.cancel();
  listenButton.classList.remove('is-speaking');
  listenLabel.textContent = 'Escuchar';
}

function renderPage(direction = '') {
  stopSpeaking();
  const page = pages[currentPage];
  book.classList.toggle('cover', Boolean(page.cover));
  illustrationWrap.className = `illustration-wrap${page.images.length > 1 ? ' two-images' : ''}`;
  illustrationWrap.innerHTML = page.images.map((src, index) => `<img src="${src}" alt="Ilustración de la página ${currentPage + 1}${page.images.length > 1 ? `, imagen ${index + 1}` : ''}" draggable="false">`).join('');
  chapter.textContent = page.cover ? '' : `Capítulo ${currentPage}`;
  storyText.innerHTML = page.text.map(paragraph => `<p>${paragraph}</p>`).join('');
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
}

function listen() {
  if (!('speechSynthesis' in window)) {
    listenLabel.textContent = 'No disponible';
    return;
  }
  if (speechSynthesis.speaking) {
    stopSpeaking();
    return;
  }
  const plainText = pages[currentPage].text.map(text => text.replace(/<[^>]+>/g, '')).join(' ');
  const utterance = new SpeechSynthesisUtterance(plainText);
  utterance.lang = 'es-MX';
  utterance.rate = .9;
  const spanishVoice = speechSynthesis.getVoices().find(voice => voice.lang.toLowerCase().startsWith('es'));
  if (spanishVoice) utterance.voice = spanishVoice;
  utterance.onend = stopSpeaking;
  utterance.onerror = stopSpeaking;
  listenButton.classList.add('is-speaking');
  listenLabel.textContent = 'Detener';
  speechSynthesis.speak(utterance);
}

previousButton.addEventListener('click', () => changePage(-1));
nextButton.addEventListener('click', () => changePage(1));
listenButton.addEventListener('click', listen);
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') changePage(-1);
  if (event.key === 'ArrowRight') changePage(1);
  if (event.key === 'Escape') stopSpeaking();
});
book.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
book.addEventListener('touchend', event => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 50) changePage(distance < 0 ? 1 : -1);
}, { passive: true });

renderPage();
