const listaTareas = document.getElementById('listaTareas');
const tareaInput = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById('aggTarea');

botonAgregar.addEventListener('click', function() {
    const tareaTexto = tareaInput.value;
    if (tareaTexto !== '') {
        const nuevaTarea = document.createElement('li');
        const botonEliminar = document.createElement('button');

        nuevaTarea.textContent = tareaTexto;
        listaTareas.appendChild(nuevaTarea);
        tareaInput.value = '';
        botonEliminar.textContent = 'Eliminar';
        nuevaTarea.appendChild(botonEliminar);
        botonEliminar.addEventListener('click', function() {
            listaTareas.removeChild(nuevaTarea);
        });
    }
})