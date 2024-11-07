const boton = document.getElementById('agregar-button');
const lista = document.querySelector('.lista-items');
const input =  document.getElementById('agregar-tarea');

boton.addEventListener('click',  function() {
    const tarea = input.value.trim();
    if (tarea.length > 0 ) {
        const item = document.createElement('li')
        item.classList.add("item")
        item.innerHTML = `${tarea} <svg class="fa-trash" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ed020e" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" style="pointer-events: none;"/></svg>`;
        lista.appendChild(item);
        input.value = '';
    }
})

lista.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash')) {
        event.target.parentNode.remove();
    }
})

const buscador = () => {
    const input = document.getElementById('buscador')
    const filtrador = input.value.toUpperCase();

    const lista = document.querySelectorAll('#lista-tareas li')
    lista.forEach((el) => {
        const texto = el.textContent.toUpperCase();
        el.style.display = texto.includes(filtrador) ? "" : "none";
    });
};

document.getElementById('buscador').addEventListener('input', buscador);
