document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.info__add-button');
    const productContainer = document.querySelector('.product__container');
    const productId = productContainer.getAttribute('data-id');

    addToCartButton.addEventListener('click', function () {
        const imgElement = document.querySelector('#info-img img');
        const nameElement = document.querySelector('#info-name');
        const priceElement = document.querySelector('#info-price');
        const quantityElement = document.querySelector('#quantity-input');

        const product = {
            id: productId,
            img: imgElement.src,
            name: nameElement.textContent,
            price: priceElement.textContent,
            quantity: quantityElement.value
        };

        // Get existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.id === productId);
        if (existingProductIndex !== -1) {
            // If the product already exists, update its quantity
            cart[existingProductIndex].quantity = parseInt(cart[existingProductIndex].quantity) + parseInt(product.quantity);
        } else {
            // If the product doesn't exist, add it to the cart
            cart.push(product);
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
