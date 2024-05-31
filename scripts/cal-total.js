document.addEventListener('DOMContentLoaded', function () {
    const checkoutSubtotalElement = document.getElementById('checkout-subtotal');
    const checkoutTotalElement = document.getElementById('checkout-total');
    const shippingCost = 12.00;

    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate subtotal
    let subtotal = cart.reduce((sum, item) => {
        let price = parseFloat(item.price.replace('$', ''));
        let quantity = parseInt(item.quantity);
        return sum + (price * quantity);
    }, 0);

    // Update subtotal and total in DOM
    checkoutSubtotalElement.textContent = `$ ${subtotal.toFixed(2)}`;
    checkoutTotalElement.textContent = `$ ${(subtotal + shippingCost).toFixed(2)}`;
});
