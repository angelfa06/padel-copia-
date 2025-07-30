document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Validar credenciales
    if (username === "LAVELEZPADELCLUB" && password === "MAUROCABRERA12") {
      // Redirigir a la página de administración
      window.location.href = "admin-turnos.html"; // Reemplaza con la URL de tu panel de administración
    } else {
      // Mostrar mensaje de error
      document.getElementById("error-msg").style.display = "block";
    }
  });


