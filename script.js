document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderContainer = document.querySelector('.slider-container');
    let index = 0;

    function showSlide(i) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        if (i >= totalSlides) {
            index = 0;
        } else if (i < 0) {
            index = totalSlides - 1;
        } else {
            index = i;
        }
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Show the first slide initially
    showSlide(index);
});
