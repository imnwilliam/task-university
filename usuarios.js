let usuarios = [];

const formUsuarios = document.getElementById('form-usuarios');
const inputNombreUsuario = document.getElementById('nombre-usuario');
const inputEmailUsuario = document.getElementById('email-usuario');
const listaUsuarios = document.getElementById('lista-usuarios');

formUsuarios.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = inputNombreUsuario.value.trim();
    const email = inputEmailUsuario.value.trim();

    if (nombre === "" || email === "") {
        return;
    }

    const usuarioExiste = usuarios.some(
        usuario => usuario.nombre.toLowerCase() === nombre.toLowerCase()
            || usuario.email.toLowerCase() === email.toLowerCase()
    );

    if (usuarioExiste) {
        alert('El usuario ya está registrado.');
        return;
    }

    usuarios.push({ nombre, email });
    inputNombreUsuario.value = '';
    inputEmailUsuario.value = '';
    renderizarUsuarios();
});

function renderizarUsuarios() {
    listaUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const li = document.createElement('li');

        li.className = 'py-2 flex items-center gap-2 text-gray-700';

        li.innerHTML = `
            <span class="bg-blue-100 text-blue-700 p-1 rounded-full text-xs">
                👤
            </span>
            <span>
                <span class="font-medium">${usuario.nombre}</span>
                <span class="block text-xs text-gray-500">${usuario.email}</span>
            </span>
        `;

        listaUsuarios.appendChild(li);
    });
}
