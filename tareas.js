let tareas = [];
const formTareas = document.getElementById('form-tareas');
const inputTituloTarea = document.getElementById('titulo-tarea');
const contenedorTareas = document.getElementById('contenedor-tareas');

formTareas.addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = inputTituloTarea.value.trim();
    if (titulo !== "") {
        tareas.push({ id: Date.now(), titulo: titulo, completada: false });
        inputTituloTarea.value = '';
        console.log("Tarea guardada en memoria. Implementar renderizado.");
    }
});