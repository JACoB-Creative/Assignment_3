document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.info__add-button');
    const cartNotification = document.querySelector('.cart__notification');
    const closeNotificationButton = document.querySelector('.cart__notification-close');
    const quantityInput = document.getElementById('quantity-input');
    const notificationQuantityInput = document.getElementById('notification-quantity');

    addToCartButton.addEventListener('click', function () {
        // Show the cart notification
        cartNotification.style.right = '0';
        // Set the value of notification-quantity to the value of quantity-input
        notificationQuantityInput.value = quantityInput.value;
    });

    closeNotificationButton.addEventListener('click', function () {
        // Hide the cart notification
        cartNotification.style.right = '-100%';
    });
});
