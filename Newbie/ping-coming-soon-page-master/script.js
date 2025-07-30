function errorMessage(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[name="email"]');
    const emailValue = emailInput.value.trim();
    const errorElement = document.getElementById('error');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        errorElement.style.display = "flex";
    } else {
        errorElement.style.display = "none";
        emailInput.style.borderColor = "";
    }
}