document.addEventListener("DOMContentLoaded", () => {
    window.registrarUsuario = function () {
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
        nombre,
        apellido,
        email,
        password,
      };
  
      localStorage.setItem(email, JSON.stringify(usuario));
      alert("Usuario registrado con éxito");
    };
  });