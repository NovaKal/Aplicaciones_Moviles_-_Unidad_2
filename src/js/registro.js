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
    // Muestra la sección "home" y oculta la sección "login".
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
  } else {
    alert("Contraseña incorrecta");
  }
};

function mostrarSeccion(seccionId) {
  const secciones = document.querySelectorAll("section");

  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  document.getElementById(seccionId).style.display = "block";
}
window.mostrarSeccion = mostrarSeccion;

document.addEventListener("DOMContentLoaded", () => {
  const semesterButton = document.getElementById("semesterButton");
  const courseButton = document.getElementById("courseButton");
  const averageSemesterButton = document.getElementById("averageSemesterButton");
  const calendarButton = document.getElementById("calendarButton");
  const settingsButton = document.getElementById("settingsButton");
  const logoutButton = document.getElementById("logoutButton");

  semesterButton.addEventListener("click", () => mostrarSeccion("semester"));
  courseButton.addEventListener("click", () => mostrarSeccion("course"));
  averageSemesterButton.addEventListener("click", () => mostrarSeccion("average_semester"));
  calendarButton.addEventListener("click", () => mostrarSeccion("calendar"));
  settingsButton.addEventListener("click", () => mostrarSeccion("settings"));
  logoutButton.addEventListener("click", () => mostrarSeccion("login"));
});