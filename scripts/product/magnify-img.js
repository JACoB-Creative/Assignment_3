document.addEventListener('DOMContentLoaded', function () {
    const magnifyIcon = document.querySelector('.product__magnify');
    const largeImageContainer = document.querySelector('#product-img');
    const largeImage = largeImageContainer.querySelector('img');
    const magnifyIconContainer = document.querySelector('.magnify-icon');
    let magnifyEnabled = false;

    magnifyIcon.addEventListener('click', function () {
        magnifyEnabled = !magnifyEnabled;
        largeImageContainer.classList.toggle('magnify-enabled', magnifyEnabled);
        magnifyIconContainer.classList.toggle('magnify-icon--active', magnifyEnabled);
    });

    largeImageContainer.addEventListener('mousemove', function (e) {
        if (!magnifyEnabled) return;

        let lens = largeImageContainer.querySelector('.magnify-lens');
        if (!lens) {
            lens = document.createElement('div');
            lens.classList.add('magnify-lens');
            largeImageContainer.appendChild(lens);
        }

        const rect = largeImageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        lens.style.left = `${x - lens.offsetWidth / 2}px`;
        lens.style.top = `${y - lens.offsetHeight / 2}px`;
        lens.style.backgroundImage = `url('${largeImage.src}')`;
        lens.style.backgroundSize = `${largeImage.width * 2}px ${largeImage.height * 2}px`;
        lens.style.backgroundPosition = `-${x * 2 - lens.offsetWidth / 2}px -${y * 2 - lens.offsetHeight / 2}px`;
    });

    largeImageContainer.addEventListener('mouseleave', function () {
        const lens = largeImageContainer.querySelector('.magnify-lens');
        if (lens) {
            lens.remove();
        }
    });
});
