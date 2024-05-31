document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel__inner');
    const items = document.querySelectorAll('.carousel__item');
    const indicators = document.querySelectorAll('.carousel__indicator');
    const prevControl = document.querySelector('.carousel__control--prev');
    const nextControl = document.querySelector('.carousel__control--next');
    let currentIndex = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('carousel__indicator--active');
            } else {
                indicator.classList.remove('carousel__indicator--active');
            }
        });
    }

    prevControl.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextControl.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Touch and Mouse event handlers for swipe
    let startX = 0;
    let isDragging = false;
    let startTime = 0;

    carouselInner.addEventListener('mousedown', (event) => {
        startX = event.pageX;
        startTime = new Date().getTime();
        isDragging = true;
    });

    carouselInner.addEventListener('mouseup', (event) => {
        if (!isDragging) return;
        const endX = event.pageX;
        const endTime = new Date().getTime();
        handleSwipe(startX, endX, startTime, endTime);
        isDragging = false;
    });

    carouselInner.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    carouselInner.addEventListener('touchstart', (event) => {
        startX = event.touches[0].pageX;
        startTime = new Date().getTime();
        isDragging = true;
    });

    carouselInner.addEventListener('touchend', (event) => {
        if (!isDragging) return;
        const endX = event.changedTouches[0].pageX;
        const endTime = new Date().getTime();
        handleSwipe(startX, endX, startTime, endTime);
        isDragging = false;
    });

    function handleSwipe(startX, endX, startTime, endTime) {
        const deltaX = startX - endX;
        const deltaTime = endTime - startTime;
        const velocity = Math.abs(deltaX / deltaTime);

        // Thresholds
        const minSwipeDistance = 50; // Minimum distance to consider it a swipe
        const maxSwipeTime = 500; // Maximum time to consider it a fast swipe
        const minSwipeVelocity = 0.3; // Minimum velocity to consider it a fast swipe

        if (Math.abs(deltaX) > minSwipeDistance || (deltaTime < maxSwipeTime && velocity > minSwipeVelocity)) {
            if (deltaX > 0) {
                // Swipe left
                currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            } else {
                // Swipe right
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            }
            updateCarousel();
        }
    }

    updateCarousel();
});
