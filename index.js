// Добавляем звезды во все карточки
document.querySelectorAll('.review-content').forEach(card => {
    const rating = document.createElement('div');
    rating.className = 'rating';
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('img');
        star.src = 'icons/star_element.svg';
        star.alt = 'Testimonials star';
        rating.appendChild(star);
    }
    
    card.prepend(rating);
});


document.querySelector('.upload-image').addEventListener('click', function() {
    document.getElementById('hidden-file-input').click();
});