// --- Lógica do Filtro e do Modal ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Filtro de Portfólio ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'todos' || filter === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Lógica do Modal de Imagem (Lightbox) ---
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close-button");
    const projectImages = document.querySelectorAll('.project-images img');

    projectImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            img.style.cursor = 'pointer'; // Adiciona um cursor para indicar que é clicável
        }
    });

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});