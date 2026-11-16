// Gerador otimizado de Fagulhas de Brasa
const embersContainer = document.getElementById('embers');
for (let i = 0; i < 15; i++) {
    const ember = document.createElement('div');
    ember.classList.add('ember');
    ember.style.left = `${Math.random() * 100}%`;
    ember.style.width = `${Math.random() * 3 + 2}px`;
    ember.style.height = ember.style.width;
    ember.style.animationDuration = `${Math.random() * 4 + 4}s`;
    ember.style.animationDelay = `${Math.random() * 5}s`;
    embersContainer.appendChild(ember);
}

function enterParty() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-content').classList.add('visible');
}

function goBackToWelcome() {
    document.getElementById('main-content').classList.remove('visible');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// Contagem Regressiva para 19/11/2026 às 19:30:00
const eventDate = new Date('2026-11-19T19:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();