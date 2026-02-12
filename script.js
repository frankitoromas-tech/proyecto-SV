const newMessageBtn = document.getElementById('newMessageBtn');
const bloomBtn = document.getElementById('bloomBtn');
const quoteText = document.getElementById('quoteText');
const bouquet = document.getElementById('bouquet');

const messages = [
  'Tu energía me inspira calma, enfoque y luz. Donde tú estás, todo mejora.',
  'No olvides esto: eres capaz, valiente y profundamente valiosa, incluso en días difíciles.',
  'Tu forma de amar y cuidar deja huellas bonitas en mi vida.',
  'Cuando dudas, recuerda que ya superaste momentos que parecían imposibles.',
  'Eres arte en movimiento: mente brillante, corazón noble y alma hermosa.',
  'El mundo necesita más personas con tu sensibilidad, tu fuerza y tu verdad.',
  'Hoy quiero que te mires con los ojos del cariño: eres un regalo real.',
  'Tu presencia tiene ese efecto raro y precioso: convertir lo común en especial.',
  'Te amo, mi amor. estare para ti en las buenas y en las malas: gracias por mostrarme este aspecto que no crei en mi.'
];

function setRandomMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  quoteText.style.opacity = '0';

  setTimeout(() => {
    quoteText.textContent = msg;
    quoteText.style.opacity = '1';
  }, 180);
}

newMessageBtn.addEventListener('click', setRandomMessage);

bloomBtn.addEventListener('click', () => {
  bouquet.classList.remove('blooming');
  void bouquet.offsetWidth;
  bouquet.classList.add('blooming');

  setTimeout(() => {
    bouquet.classList.remove('blooming');
  }, 1200);
});

quoteText.style.transition = 'opacity .25s ease';
setRandomMessage();
setInterval(setRandomMessage, 7000);

