document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const cards = document.querySelectorAll('.arrival__card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let startX;
    let isDragging = false;
    let cardsPerRow = 5;

    const updateSlider = () => {
        const cardWidth = cards[0].clientWidth + parseFloat(window.getComputedStyle(cards[0]).marginRight);
        sliderWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    const updateCardsPerRow = () => {
        const width = window.innerWidth;
        if (width <= 400) {
            cardsPerRow = 2.5;
        } else if (width <= 768) {
            cardsPerRow = 3.5;
        } else {
            cardsPerRow = 5;
        }
        currentIndex = 0;
        updateSlider();
    };

    window.addEventListener('resize', updateCardsPerRow);
    updateCardsPerRow();

    sliderWrapper.addEventListener('mousedown', (e) => {
        startX = e.pageX;
        isDragging = true;
        sliderWrapper.style.cursor = 'grabbing';
        e.preventDefault(); 
    });

    sliderWrapper.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const moveX = e.pageX - startX;
            if (moveX > 100) {
                if (currentIndex > 0) {
                    currentIndex -= 1;
                    updateSlider();
                }
                isDragging = false;
            } else if (moveX < -100) {
                if (currentIndex < totalCards - cardsPerRow) {
                    currentIndex += 1;
                    updateSlider();
                }
                isDragging = false;
            }
            e.preventDefault(); 
        }
    });

    sliderWrapper.addEventListener('mouseup', () => {
        isDragging = false;
        sliderWrapper.style.cursor = 'grab';
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        isDragging = false;
        sliderWrapper.style.cursor = 'grab';
    });

    sliderWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        isDragging = true;
    });

    sliderWrapper.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const moveX = e.touches[0].pageX - startX;
            if (moveX > 100) {
                if (currentIndex > 0) {
                    currentIndex -= 1;
                    updateSlider();
                }
                isDragging = false;
            } else if (moveX < -100) {
                if (currentIndex < totalCards - cardsPerRow) {
                    currentIndex += 1;
                    updateSlider();
                }
                isDragging = false;
            }
            e.preventDefault(); 
        }
    });

    sliderWrapper.addEventListener('touchend', () => {
        isDragging = false;
    });
});
