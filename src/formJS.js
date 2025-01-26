// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email envoyé avec succès!');
        } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});