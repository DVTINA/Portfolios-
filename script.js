// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('formMessage').textContent = `Merci ${name} ! Votre message a été envoyé.`;
        document.getElementById('formMessage').style.color = 'green';
        this.reset();
    } else {
        document.getElementById('formMessage').textContent = 'Veuillez remplir tous les champs.';
        document.getElementById('formMessage').style.color = 'red';
    }
});

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
