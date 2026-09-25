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

    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');

        li.className = 'py-2 flex items-center justify-between gap-2 text-gray-700';

        li.innerHTML = `
            <span class="flex items-center gap-2">
                <span class="bg-blue-100 text-blue-700 p-1 rounded-full text-xs">
                    👤
                </span>
                <span>
                    <span class="font-medium">${usuario.nombre}</span>
                    <span class="block text-xs text-gray-500">${usuario.email}</span>
                </span>
            </span>
            <button type="button" class="btn-eliminar-usuario text-red-500 hover:text-red-700 text-sm font-medium" data-index="${index}">
                Eliminar
            </button>
        `;

        listaUsuarios.appendChild(li);
    });
}

listaUsuarios.addEventListener('click', function(e) {
    const boton = e.target.closest('.btn-eliminar-usuario');

    if (!boton) {
        return;
    }

    const index = Number(boton.dataset.index);
    usuarios.splice(index, 1);
    renderizarUsuarios();
});
