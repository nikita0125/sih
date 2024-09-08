document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').classList.remove('hidden');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const parentEmail = document.getElementById('parentEmail').value;
    const parentPhone = document.getElementById('parentPhone').value;

    // Basic validation for required fields
    if (!name || !studentClass || !parentEmail || !parentPhone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Hide login form and redirect to main page
    document.getElementById('loginModal').classList.add('hidden');

    // Add Student Profile button
    const navLinks = document.getElementById('navLinks');
    const profileButton = document.createElement('li');
    profileButton.innerHTML = '<a href="profile.html"><i class="fa-solid fa-user"></i>Student Profile</a>';
    navLinks.appendChild(profileButton);

    // Remove Login button
    const loginLink = document.getElementById('loginLink').parentNode;
    navLinks.removeChild(loginLink);

    alert('Login successful!');
});
