// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Éléments principaux
    const accueil = document.getElementById('accueil');
    const sections = document.querySelectorAll('.section-content');
    const navItems = document.querySelectorAll('.nav-item:not(#filterBtn)');
    const filterBtn = document.getElementById('filterBtn');
    const searchInput = document.getElementById('searchInput');
    const contactForm = document.getElementById('contactForm');
    const menuBtn = document.getElementById('menuBtn');

    // Afficher la section accueil par défaut
    function showSection(sectionId) {
        // Masquer toutes les sections
        accueil.style.display = 'none';
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Afficher la section demandée
        if (sectionId === 'accueil') {
            accueil.style.display = 'block';
        } else {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        }

        // Mettre à jour les classes active pour la nav (sans nouveau CSS, on utilise inline ou rien)
        navItems.forEach(item => item.classList.remove('active'));
        const activeItem = Array.from(navItems).find(item => item.textContent.trim().toUpperCase() === sectionId.toUpperCase());
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    // Écouteurs pour les menus (déjà onclick dans HTML pour simplicité, mais on peut ajouter ici si besoin)
    // Pour "Filtrer Par" : Simulation simple d'alert pour dropdown (sans CSS pour dropdown, on simule)
    filterBtn.addEventListener('click', function() {
        // Sans CSS pour dropdown, on affiche une alerte simple pour demo
        const filterChoice = prompt('Choisissez un filtre : all, web, enseignement, open-source');
        if (filterChoice) {
            filterCards(filterChoice);
        }
    });

    // Fonction de filtrage des cartes (dans la section visible)
    function filterCards(filter) {
        const visibleSection = document.querySelector('.section-content[style*="block"]') || document.querySelector('#accueil');
        const cards = visibleSection.querySelectorAll('.site-card');
        cards.forEach(card => {
            const tags = card.querySelectorAll('[data-tags]');
            let matches = filter === 'all';
            if (!matches) {
                tags.forEach(tag => {
                    if (tag.dataset.tags && tag.dataset.tags.includes(filter)) {
                        matches = true;
                    }
                });
            }
            card.style.display = matches ? 'block' : 'none';
        });
    }

    // Gestion de la recherche (filtre texte dans la section visible)
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const visibleSection = document.querySelector('.section-content[style*="block"]') || document.getElementById('accueil');
        const elements = visibleSection.querySelectorAll('.site-card, .hero-content');
        elements.forEach(el => {
            const text = el.textContent.toLowerCase();
            el.style.display = text.includes(query) ? 'block' : 'none';
        });
    });

    // Gestion du formulaire de contact
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message envoyé ! Merci pour votre contact. Je vous répondrai bientôt.');
            this.reset();
        });
    }

    // Menu bouton (simulation toggle sans nouveau CSS : alert pour mobile)
    menuBtn.addEventListener('click', function() {
        // Sans CSS pour mobile menu, on simule avec prompt pour choix section
        const choice = prompt('Choisissez une section : accueil, developpement, enseignement, projets, contact');
        if (choice) {
            showSection(choice);
        }
    });

    // Fonctions globales pour onclick dans HTML
    window.downloadCV = function() {
        alert('Téléchargement du CV en cours... (Remplacez par un lien vers votre CV PDF)');
        // Exemple : window.open('cv.pdf', '_blank');
    };

    window.showSection = showSection; // Exposer pour onclick
});