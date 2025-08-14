document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blog-form');
    const blogPosts = document.getElementById('blog-posts');

    // Charger les articles depuis localStorage
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Afficher les articles existants
    function displayPosts() {
        blogPosts.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                ${post.image ? `<img src="${post.image}" alt="Image de l'article">` : ''}
                <p>${post.content}</p>
                <div class="comment-section">
                    <h4>Commentaires</h4>
                    ${post.comments ? post.comments.map(comment => `<div class="comment">${comment}</div>`).join('') : ''}
                    <form class="comment-form" data-post-index="${index}">
                        <textarea placeholder="Ajouter un commentaire" required></textarea>
                        <button type="submit">Commenter</button>
                    </form>
                </div>
            `;
            blogPosts.appendChild(postElement);
        });

        // Ajouter des écouteurs pour les formulaires de commentaires
        document.querySelectorAll('.comment-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const postIndex = form.dataset.postIndex;
                const comment = form.querySelector('textarea').value;
                if (!posts[postIndex].comments) {
                    posts[postIndex].comments = [];
                }
                posts[postIndex].comments.push(comment);
                localStorage.setItem('blogPosts', JSON.stringify(posts));
                form.querySelector('textarea').value = '';
                displayPosts();
            });
        });
    }

    // Gérer la soumission du formulaire de blog
    if (blogForm) {
        blogForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const imageInput = document.getElementById('image');
            let image = '';

            if (imageInput.files && imageInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    image = e.target.result; // Data URL de l'image
                    posts.push({ title, content, image, comments: [] });
                    localStorage.setItem('blogPosts', JSON.stringify(posts));
                    blogForm.reset();
                    displayPosts();
                };
                reader.readAsDataURL(imageInput.files[0]);
            } else {
                posts.push({ title, content, image, comments: [] });
                localStorage.setItem('blogPosts', JSON.stringify(posts));
                blogForm.reset();
                displayPosts();
            }
        });
    }

    // Afficher les articles au chargement
    displayPosts();
});


document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const form = event.target;
    const formData = new FormData(form);
    const messageElement = document.getElementById('form-message');

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const result = await response.json();

        if (result.success) {
            messageElement.textContent = 'Message envoyé avec succès !';
            messageElement.style.color = '#00ffff';
            form.reset(); // Réinitialise le formulaire
        } else {
            messageElement.textContent = 'Erreur : ' + result.message;
            messageElement.style.color = '#ff69b4';
        }
    } catch (error) {
        messageElement.textContent = 'Une erreur s\'est produite. Veuillez réessayer.';
        messageElement.style.color = '#ff69b4';
    }
});
