const startDate = new Date('2026-05-23T17:35:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();

const textToType = "System Status: Time elapsed without verified course progress... complete the things!";
const typeContainer = document.getElementById('typed-text');
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < textToType.length) {
        typeContainer.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 40); 
    }
}

setTimeout(typeWriter, 3000);

particlesJS("particles-js", {
    "particles": {
        "number": { "value": 70, "density": { "enable": true, "value_area": 900 } },
        "color": { "value": "#00e5ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2, "random": false },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00e5ff", "opacity": 0.15, "width": 1 },
        "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } }
    },
    "retina_detect": true
});

const commandCore = document.getElementById('command-core');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 900) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    
    commandCore.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
    const shadowX = (window.innerWidth / 2 - e.pageX) / 30;
    const shadowY = (window.innerHeight / 2 - e.pageY) / 30;
    
    commandCore.style.boxShadow = `
        ${-15 + shadowX}px ${shadowY}px 30px -10px rgba(0, 229, 255, 0.5), 
        ${15 + shadowX}px ${shadowY}px 30px -10px rgba(0, 229, 255, 0.5),
        inset ${-8 + (shadowX/2)}px ${(shadowY/2)}px 15px -5px rgba(0, 229, 255, 0.2),
        inset ${8 + (shadowX/2)}px ${(shadowY/2)}px 15px -5px rgba(0, 229, 255, 0.2)
    `;
});

commandCore.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 900) return;
    commandCore.style.transform = `rotateY(0deg) rotateX(0deg)`;
    commandCore.style.boxShadow = `
        -15px 0 25px -10px rgba(0, 229, 255, 0.4), 
        15px 0 25px -10px rgba(0, 229, 255, 0.4),
        inset -8px 0 15px -5px rgba(0, 229, 255, 0.15),
        inset 8px 0 15px -5px rgba(0, 229, 255, 0.15)
    `;
});