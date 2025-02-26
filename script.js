document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // Clear the form
    document.getElementById('contact-form').reset();
});
