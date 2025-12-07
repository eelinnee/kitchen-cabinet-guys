// Функционал для мобильного меню
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileServ = document.getElementById('mobileServ');
const backBtn = document.getElementById('backBtn');
const mainMenu = document.getElementById('mainMenu');
const servicesMenu = document.getElementById('servicesMenu');
const uploadTrigger = document.getElementById('uploadTrigger');
const hiddenFileInput = document.getElementById('hidden-file-input');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', closeMobileMenu);
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
    showMainMenu();
}

mobileServ.addEventListener('click',  () => {
    mainMenu.style.display = 'none';
    servicesMenu.style.display = 'block';
    backBtn.style.display = 'block';
});

backBtn.addEventListener('click', showMainMenu);
function showMainMenu() {
    mainMenu.style.display = 'block';
    servicesMenu.style.display = 'none';
    backBtn.style.display = 'none';
}

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Загрузка изображений
document.querySelector('.upload-image').addEventListener('click', function() {
    document.getElementById('hidden-file-input').click();
});


// Добавление звезд рейтинга
document.querySelectorAll('.rating').forEach(rating => {
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        rating.appendChild(star);
    }
});
