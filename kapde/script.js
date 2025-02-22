// Function to close the signup form with animations
function closeSignupForm() {
    const signupContainer = document.getElementById('signupContainer');
    const signupForm = document.querySelector('.signup-form');

    // Add fade-out and slide-out animations
    signupForm.style.animation = 'slideOut 0.5s ease-in-out';
    signupContainer.style.animation = 'fadeOut 0.5s ease-in-out';

    // Wait for the animation to finish before removing the form
    setTimeout(() => {
        signupContainer.remove();
    }, 500); // Match the duration of the animation
}

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    closeSignupForm(); // Close the form after successful signup
});

// Handle cross button click
document.getElementById('closeBtn').addEventListener('click', function() {
    closeSignupForm(); // Close the form when the cross button is clicked
});