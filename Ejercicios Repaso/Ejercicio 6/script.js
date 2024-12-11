// Seleccionar el botón y el body
const button = document.getElementById('theme-toggle');
const body = document.body;

// Detectar el tema actual y alternar entre los temas
button.addEventListener('click', () => {
    if (body.classList.contains('tema-claro')) {
        body.classList.remove('tema-claro');
        body.classList.add('tema-oscuro');
        button.textContent = 'Cambiar a Tema Claro';
    } else {
        body.classList.remove('tema-oscuro');
        body.classList.add('tema-claro');
        button.textContent = 'Cambiar a Tema Oscuro';
    }
});

// Establecer el tema inicial (por defecto es el claro)
document.body.classList.add('tema-claro');