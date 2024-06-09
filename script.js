document.addEventListener('DOMContentLoaded', function() {
    const loginPage = document.getElementById('loginPage');
    const signupPage = document.getElementById('signupPage');
    const loginLink = document.getElementById('loginLink');
    const signupLink = document.getElementById('signupLink');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Switch to signup page when "Sign Up" link is clicked
    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginPage.style.display = 'none';
        signupPage.style.display = 'block';
    });

    // Switch to login page when "Login" link is clicked
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupPage.style.display = 'none';
        loginPage.style.display = 'block';
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value.trim(); // Remove leading and trailing spaces
        const password = document.getElementById('loginPassword').value;

        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));

        // Check if userData exists and if the entered email and password match
        if (userData && userData.email === email && userData.password === password) {
            alert('Login successful!');
            window.location.href = 'landing.html'; // Redirect to landing page
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Save user data to localStorage
        localStorage.setItem('userData', JSON.stringify({ name: name, email: email, password: password }));

        alert('Signup successful! Please login with your credentials.');

        // Switch to login page after successful signup
        signupPage.style.display = 'none';
        loginPage.style.display = 'block';
    });
});
