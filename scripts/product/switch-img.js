document.addEventListener('DOMContentLoaded', function () {
    const smallImages = document.querySelectorAll('.product-img--small');
    const largeImage = document.querySelector('#product-img img');

    smallImages.forEach(imgContainer => {
        imgContainer.addEventListener('click', function () {
            // Update the large image
            const newSrc = this.getAttribute('data-img');
            largeImage.src = newSrc;

            // Remove 'selected' class from all small images
            smallImages.forEach(img => img.classList.remove('selected'));

            // Add 'selected' class to the clicked image
            this.classList.add('selected');
        });
    });

    // Initialize with the first image selected
    smallImages[0].classList.add('selected');
});
