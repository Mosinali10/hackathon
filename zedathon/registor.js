function showLogin() {
    document.getElementById('login-form').classList.remove('d-none');
    document.getElementById('register-form').classList.add('d-none');
}

function showRegister() {
    document.getElementById('register-form').classList.remove('d-none');
    document.getElementById('login-form').classList.add('d-none');
}

// Set the default view to Login
window.onload = () => {
    showLogin();
};
