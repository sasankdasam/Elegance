document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const signupButton = document.getElementById('signup');

    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Signup button functionality
    signupButton.addEventListener('click', async function (event) {
        event.preventDefault();

        const emailField = document.querySelector('input[type="email"]');
        const email = emailField.value.trim();
        const password = passwordField.value.trim();
        const confirmPassword = confirmPasswordField.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Basic validation
        if (email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
        } else if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.');
        } else {
            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        confirmPassword,
                    }),
                });

                const result = await response.json();
                if (result.success) {
                    alert('Sign-up successful!');
                    window.location.href = '../html/login.html'; // Redirect to login page
                } else {
                    alert(result.message || 'An error occurred.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        }
    });
});
