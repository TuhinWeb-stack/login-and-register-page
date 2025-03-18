document.getElementById('signInBtn').addEventListener('click', function() {
    document.getElementById('signInForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('signInForm').classList.remove('active');
});