document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const errorMessage = document.getElementById('error-message');

    if (email !== confirmEmail) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Submit the form or perform the desired action
        alert('Form submitted successfully!');
    }
});
