 // Vainilla JavaScript
// Recuperar botón
const button = document.querySelector('button');

// Click ejecuta una función
button.addEventListener('click', function () { 
    const id = button.getAttribute('data-id');

    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.innerText = 'Me gusta';
    } else {
        button.classList.add('liked');
        button.innerText = 'Quitar me gusta';
    }
});
