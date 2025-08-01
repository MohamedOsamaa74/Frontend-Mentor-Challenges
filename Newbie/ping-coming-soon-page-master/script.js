function errorMessage(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[name="email"]');
    const emailValue = emailInput.value.trim();
    const errorElement = document.getElementById('error');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        errorElement.classList.add('show');
    } else {
        errorElement.classList.remove('show');
        emailInput.style.borderColor = "";
    }
}