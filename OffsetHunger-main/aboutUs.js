let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    console.log(`Showing slide ${currentSlide}`);
}

function nextSlide() {
    showSlide(currentSlide + 1);
    console.log('Next slide');
}

function prevSlide() {
    showSlide(currentSlide - 1);
    console.log('Previous slide');
}
function contactAlert() {
    alert('Thanks for contacting');
}



document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});