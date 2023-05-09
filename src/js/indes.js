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
    var semesterButton = document.getElementById("semesterButton");
    var courseButton = document.getElementById("courseButton");
    var averageSemesterButton = document.getElementById("averageSemesterButton");
    var calendarButton = document.getElementById("calendarButton");
    var settingsButton = document.getElementById("settingsButton");
    var homeButton = document.getElementById("exitButton");

    semesterButton.addEventListener("click", () => mostrarSeccion("semester"));
    courseButton.addEventListener("click", () => mostrarSeccion("course"));
    averageSemesterButton.addEventListener("click", () => mostrarSeccion("average_semester"));
    calendarButton.addEventListener("click", () => mostrarSeccion("calendar_year"));
    calendarButton.addEventListener("click", () => mostrarSeccion("calendar_month"));
    calendarButton.addEventListener("click", () => mostrarSeccion("calenda_week"));
    calendarButton.addEventListener("click", () => mostrarSeccion("calendar_day"));
    settingsButton.addEventListener("click", () => mostrarSeccion("settings"));
    homeButton.addEventListener("click", () => mostrarSeccion("home"));
  });

  const lista = document.getElementById("lista");
  const formulario = document.getElementById("formulario");
  const contenedorSecciones = document.getElementById("secciones");
  const botonGuardarCambios = document.getElementById("guardar-cambios");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nuevoElemento = document.createElement("li");
    const nombreElemento = document.createElement("span");
    const botonEditar = document.createElement("button");
    const botonEliminar = document.createElement("button");
    const botonCrearSeccion = document.createElement("button");
    nombreElemento.textContent = event.target.elements["nuevo-elemento"].value;
    botonEditar.textContent = "Editar";
    botonEliminar.textContent = "Eliminar";
    botonCrearSeccion.textContent = "Ir";
    botonEditar.addEventListener("click", () => {
      nombreElemento.contentEditable = true;
      nombreElemento.focus();
    });
    botonEliminar.addEventListener("click", () => {
      lista.removeChild(nuevoElemento);
    });
    botonCrearSeccion.addEventListener("click", () => {
      const nombreSeccion = nombreElemento.textContent;
      const nuevaSeccion = document.createElement("section");
      const tituloSeccionH1 = document.createElement("h1");
      const divGrid = document.createElement("div");
      const divRow1 = document.createElement("div");
      const divRow2 = document.createElement("div");
      const divImageTitleContainer = document.createElement("div");
      const buttonHome = document.createElement("button");
      const buttonAbout = document.createElement("button");
      const imagen_titulo = document.createElement("img");
      const course_profesor_input_text = document.createElement("input");
      const label_profesor_input_text = document.createElement("label");
      const course_classroom_input_text = document.createElement("input");
      const label_classroom_input_text = document.createElement("label");
      const course_grade_input_text = document.createElement("input");
      const label_grade_input_text = document.createElement("label");
      const course_credits_input_text = document.createElement("input");
      const label_credits_input_text = document.createElement("label");
      const button_course_guardar = document.createElement("button");

      divGrid.classList.add("grid-container-modules");
      divRow1.classList.add("row1");
      divRow2.classList.add("row2");
      divImageTitleContainer.classList.add("image-title-container");
      buttonHome.classList.add("exit-button");
      buttonAbout.classList.add("settings-button");
      imagen_titulo.src = "./images/course.png";
      buttonHome.textContent = "Home";
      buttonAbout.textContent = "About";

      course_profesor_input_text.setAttribute("type", "text");
      course_profesor_input_text.setAttribute("id", "texto1");
      label_profesor_input_text.setAttribute("for", "texto1");
      label_profesor_input_text.textContent = "Profesor";
      course_classroom_input_text.setAttribute("type", "text");
      course_classroom_input_text.setAttribute("id", "texto2");
      label_classroom_input_text.setAttribute("for", "texto2");
      label_classroom_input_text.textContent = "Salon";
      course_grade_input_text.setAttribute("type", "number");
      course_grade_input_text.setAttribute("id", "numero1");
      course_grade_input_text.setAttribute("setp", "0.01");
      label_grade_input_text.setAttribute("for", "numero1");
      label_grade_input_text.textContent = "Nota";
      course_credits_input_text.setAttribute("type", "number");
      course_credits_input_text.setAttribute("id", "numero2");
      label_credits_input_text.setAttribute("for", "numero2");
      label_credits_input_text.textContent = "Creditos";
      button_course_guardar.setAttribute("id", "button_course_guardar");
      button_course_guardar.textContent = "Guardar";
      button_course_guardar.classList.add("settings-button");

      buttonHome.addEventListener("click", function () {
        mostrarSeccion("home");
      });
      buttonAbout.addEventListener("click", function() {
        mostrarSeccion("settings");
      });

      button_course_guardar.addEventListener("click", () => {
        const nota = course_grade_input_text.value;

        localStorage.setItem(tituloSeccionH1.value, nota);
        alert("probado");
      });

      divRow1.appendChild(buttonHome);
      divRow1.appendChild(buttonAbout);
      divRow1.appendChild(divImageTitleContainer);
      divRow2.appendChild(label_profesor_input_text);
      divRow2.appendChild(course_profesor_input_text);
      divRow2.appendChild(label_classroom_input_text);
      divRow2.appendChild(course_classroom_input_text);
      divRow2.appendChild(label_grade_input_text);
      divRow2.appendChild(course_grade_input_text);
      divRow2.appendChild(label_credits_input_text);
      divRow2.appendChild(course_credits_input_text);
      divRow2.appendChild(button_course_guardar);
      divGrid.appendChild(divRow1);
      divGrid.appendChild(divRow2);
      divImageTitleContainer.appendChild(imagen_titulo);
      tituloSeccionH1.textContent = nombreSeccion;
      nuevaSeccion.appendChild(tituloSeccionH1);
      nuevaSeccion.appendChild(divGrid);
      contenedorSecciones.appendChild(nuevaSeccion);

  });
  nuevoElemento.appendChild(nombreElemento);
  nuevoElemento.appendChild(botonEditar);
  nuevoElemento.appendChild(botonEliminar);
  nuevoElemento.appendChild(botonCrearSeccion);
  lista.appendChild(nuevoElemento);
  formulario.reset();
});