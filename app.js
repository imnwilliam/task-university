// ==========================================
// MÓDULO DE USUARIOS (Rama: feature-usuarios)
// ==========================================
function registrarUsuario(nombre, email) {
    console.log("Registrando usuario:", nombre);
    // TODO: Implementar lógica para guardar al usuario
}

function listarUsuarios() {
    console.log("Cargando lista de usuarios...");
    // TODO: Implementar lógica para inyectar los usuarios en el HTML
}


// ==========================================
// MÓDULO DE TAREAS (Rama: feature-tareas)
// ==========================================
function registrarTarea(titulo, descripcion) {
    console.log("Registrando tarea:", titulo);
    // TODO: Implementar creación de tareas
}

function editarTarea(id) {
    // TODO: Implementar la edición de una tarea existente
}

function eliminarTarea(id) {
    // TODO: Implementar borrado de tarea
}

function completarTarea(id) {
    // TODO: Implementar cambio de estado a "completada"
}


// ==========================================
// MÓDULO DASHBOARD (Rama: feature-dashboard)
// ==========================================
function actualizarEstadisticas() {
    console.log("Calculando métricas...");
    // TODO: Contar y mostrar cantidad total, tareas completadas y tareas pendientes
}