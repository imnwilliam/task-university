let usuarios = [];
const formUsuarios = document.getElementById('form-usuarios');
const inputNombreUsuario = document.getElementById('nombre-usuario');
const listaUsuarios = document.getElementById('lista-usuarios');

formUsuarios.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = inputNombreUsuario.value.trim();
    if (nombre !== "") {
        usuarios.push(nombre);
        inputNombreUsuario.value = '';
        renderizarUsuarios();
    }
});

function renderizarUsuarios() {
    listaUsuarios.innerHTML = '';
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.className = 'py-2 flex items-center gap-2 text-gray-700';
        li.innerHTML = `<span class="bg-blue-100 text-blue-700 p-1 rounded-full text-xs">👤</span> ${usuario}`;
        listaUsuarios.appendChild(li);
    });
}

let usuarios = [];

const formUsuarios = document.getElementById('form-usuarios');
const inputNombreUsuario = document.getElementById('nombre-usuario');
const listaUsuarios = document.getElementById('lista-usuarios');

formUsuarios.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = inputNombreUsuario.value.trim();

    if (nombre === "") {
        return;
    }

    const usuarioExiste = usuarios.some(
        usuario => usuario.toLowerCase() === nombre.toLowerCase()
    );

    if (usuarioExiste) {
        alert('El usuario ya está registrado.');
        return;
    }

    usuarios.push(nombre);
    inputNombreUsuario.value = '';
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
            ${usuario}
        `;

        listaUsuarios.appendChild(li);
    });
}