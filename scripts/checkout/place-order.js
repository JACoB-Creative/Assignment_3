document.addEventListener('DOMContentLoaded', function () {
    const placeOrderButton = document.getElementById('place-order');
    const placeOrderMobile = document.getElementById('place-order-mobile');
    const modal = document.getElementById('order-complete-modal');

    placeOrderButton.addEventListener('click', function () {
        if (window.validateForm()) {
            //clean the local storage
            localStorage.clear();
            modal.style.display = 'flex';
        }
    });
    
    placeOrderMobile.addEventListener('click', function () {
        if (window.validateForm()) {
            //clean the local storage
            localStorage.clear();
            modal.style.display = 'flex';
        }
    });
});
