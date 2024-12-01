document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    const loginButton = document.querySelector('.login-btn');
    const loginForm = document.getElementById('loginForm');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Login button functionality
    loginButton.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent form from submitting automatically

        const emailField = document.querySelector('input[type="email"]');
        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        // Email pattern for validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Basic validation
        if (email === '' || password === '') {
            alert('Please fill in both email and password.');
        } else if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
        } else {
            try {
                const response = await fetch('/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    window.location.href = 'index.html'; // Redirect to the home page
                } else {
                    alert(result.message); // Show error message from the server
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        }
    });
});
