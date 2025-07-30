// Animation des barres de progression lors du défilement
const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.getElementById('skills');

function animateProgressBars() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute('style').match(/width: (\d+)%/)[1] + '%';
        });
        window.removeEventListener('scroll', animateProgressBars);
    }
}

window.addEventListener('scroll', animateProgressBars);

// Gestion du formulaire (confirmation et réinitialisation)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    
    if (name && phone && gender) {
        document.getElementById('formMessage').textContent = 'Message envoyé !';
        document.getElementById('formMessage').style.color = 'green';
        this.reset(); // Vider le formulaire après soumission
    } else {
        e.preventDefault();
        document.getElementById('formMessage').textContent = 'Veuillez remplir tous les champs.';
        document.getElementById('formMessage').style.color = 'red';
    }
});

// Afficher le message de confirmation après redirection
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');
if (message) {
    document.getElementById('formMessage').textContent = decodeURIComponent(message);
    document.getElementById('formMessage').style.color = 'green';
}
