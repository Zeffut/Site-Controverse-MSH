// Création du curseur personnalisé
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Mise à jour de la position du curseur personnalisé
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Ajout d'un effet au survol des liens
document.querySelectorAll('a, button, .hover-effect').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// Effet de rebond au clic
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursor.style.transition = 'transform 0.1s ease-out';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.2)';
    setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    }, 100);
});