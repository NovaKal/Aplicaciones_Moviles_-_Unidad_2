document.addEventListener("DOMContentLoaded", () => {
    window.registrarUsuario = function () {
      const username = document.getElementById("username").value.trim();
      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!emailInput.checkValidity()) {
        alert("Por favor, ingresa un correo electrónico válido");
        return;
      }
  
      const usuario = {
        username,
        nombre,
        apellido,
        email,
        password,
      };
  
      localStorage.setItem(username, JSON.stringify(usuario));
      alert("Usuario registrado con éxito");
    };
  });

  window.iniciarSesion = function () {
    const username = document.getElementById("username-login").value.trim();
    const password = document.getElementById("password-login").value.trim();
  
    const usuarioJSON = localStorage.getItem(username);
    if (!usuarioJSON) {
      alert("Nombre de usuario incorrecto");
      return;
    }
  
    const usuario = JSON.parse(usuarioJSON);
    if (usuario.password === password) {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones.
    } else {
      alert("Contraseña incorrecta");
    }
  };