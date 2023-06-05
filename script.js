function validateForm(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
  
    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
      alert('Por favor, completa todos los campos.');
    } else {
      alert('¡Formulario enviado con éxito!');
      document.getElementById('registration-form').reset(); // Restablece el formulario después del envío
    }
  }
  