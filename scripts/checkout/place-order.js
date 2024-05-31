document.addEventListener('DOMContentLoaded', function () {
    const placeOrderButton = document.getElementById('place-order');
    const modal = document.getElementById('order-complete-modal');
    const modalButtons = document.querySelectorAll('.modal-button');

    placeOrderButton.addEventListener('click', function () {
        if (window.validateForm()) {
            //clean the local storage
            localStorage.clear();
            modal.style.display = 'flex';
        }
    });
});
