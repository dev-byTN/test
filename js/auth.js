// auth.js

// Simple localStorage-based auth (not secure, only for demo)

// Handle Registration
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  if (localStorage.getItem(email)) {
    document.getElementById('registerMessage').textContent = 'User already exists!';
  } else {
    localStorage.setItem(email, JSON.stringify({ email, password }));
    document.getElementById('registerMessage').textContent = 'Registration successful! You can now log in.';
    this.reset();
  }
});

// Handle Login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = JSON.parse(localStorage.getItem(email));

  if (!user) {
    document.getElementById('loginMessage').textContent = 'User not found!';
  } else if (user.password !== password) {
    document.getElementById('loginMessage').textContent = 'Incorrect password!';
  } else {
    sessionStorage.setItem('loggedInUser', email);
    document.getElementById('loginMessage').textContent = 'Login successful! Redirecting...';
    setTimeout(() => window.location.href = 'index.html', 1500);
  }
});
