const itemsToShow = 3; // Number of items visible at once
const items = document.querySelectorAll('.skill-item');
const totalItems = items.length;
let currentIndex = 0;

function showItems() {
    const offset = -currentIndex * (100 / itemsToShow);
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSkill() {
    currentIndex = (currentIndex + 1) % (totalItems - itemsToShow + 1);
    showItems();
}

function prevSkill() {
    currentIndex = (currentIndex - 1 + (totalItems - itemsToShow + 1)) % (totalItems - itemsToShow + 1);
    showItems();
}

// Initial display
showItems();

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Hide loader and show content
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    content.style.display = 'block';
});

