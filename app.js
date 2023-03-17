// Configura tus credenciales de EmailJS
emailjs.init('3y8aAbtCvvkD_Amo_');

// Obtiene el formulario HTML y agrega un evento para enviar el correo electrónico
document.getElementById("my-form").addEventListener("submit", function(event) {
  event.preventDefault(); // previene el envío del formulario por defecto
  
  // Obtiene los valores del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Envía el correo electrónico usando EmailJS
  emailjs.send("service_gai1i6h", "template_0irom1d", {
    from_name: name,
    from_email: email,
    message: message
  }).then(function(response) {
    console.log("Correo electrónico enviado con éxito", response);
  }, function(error) {
    console.log("Error al enviar el correo electrónico", error);
  });
});