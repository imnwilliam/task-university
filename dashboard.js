const statTotal = document.getElementById('stat-total');
const statCompletadas = document.getElementById('stat-completadas');
const statPendientes = document.getElementById('stat-pendientes');

function actualizarDashboard(total, completadas, pendientes) {
    statTotal.textContent = total;
    statCompletadas.textContent = completadas;
    statPendientes.textContent = pendientes;
    console.log("Métricas listas para integrarse con las tareas.");
}