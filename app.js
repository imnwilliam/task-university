// ==========================================
// MÓDULO DE USUARIOS (Rama: feature-usuarios)
// ==========================================
let usuarios = [];

const formUsuarios = document.getElementById('form-usuarios');
const inputNombreUsuario = document.getElementById('nombre-usuario');
const listaUsuarios = document.getElementById('lista-usuarios');

// Escuchar el evento de enviar el formulario
formUsuarios.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    const nombre = inputNombreUsuario.value.trim();
    if (nombre !== "") {
        registrarUsuario(nombre);
        inputNombreUsuario.value = ''; // Limpiar el input
    }
});

function registrarUsuario(nombre) {
    // Agregar al arreglo
    usuarios.push(nombre);
    
    // Actualizar la interfaz
    renderizarUsuarios();
}

function renderizarUsuarios() {
    // Limpiar la lista actual
    listaUsuarios.innerHTML = '';
    
    // Crear los elementos visuales para cada usuario
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.className = 'py-2 flex items-center gap-2 text-gray-700';
        li.innerHTML = `
            <span class="bg-blue-100 text-blue-700 p-1 rounded-full text-xs">👤</span>
            ${usuario}
        `;
        listaUsuarios.appendChild(li);
    });
}

// ==========================================
// MÓDULO DE TAREAS (Rama: feature-tareas)
// ==========================================
// Tus compañeros deberán programar esto...
console.log("Módulo de tareas pendiente de implementación.");

// ==========================================
// MÓDULO DASHBOARD (Rama: feature-dashboard)
// ==========================================
// Tus compañeros deberán programar esto...
console.log("Módulo de dashboard pendiente de implementación.");