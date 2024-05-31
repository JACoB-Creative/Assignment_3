document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart__items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.dataset.id = item.id;
        cartItemElement.innerHTML = `
            <div class="cart-item__container">
                <div class="cart-item__img">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <p class="cart-item__name">${item.name}</p>
                <p class="cart-item__price">${item.price}</p>
                <div class="cart-item__quantity-container">
                    <button class="cart-item__quantity-button align__self-left" id="decrease-${item.id}">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="number" class="cart-item__quantity" value="${item.quantity}" min="0" id="quantity-${item.id}">
                    <button class="cart-item__quantity-button align__self-right" id="increase-${item.id}">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Add event listeners for increase and decrease buttons
    cart.forEach(item => {
        document.getElementById(`decrease-${item.id}`).addEventListener('click', function () {
            const quantityInput = document.getElementById(`quantity-${item.id}`);
            if (quantityInput.value > 0) {
                quantityInput.value--;
                updateCart(item.id, quantityInput.value);
            }
        });

        document.getElementById(`increase-${item.id}`).addEventListener('click', function () {
            const quantityInput = document.getElementById(`quantity-${item.id}`);
            quantityInput.value++;
            updateCart(item.id, quantityInput.value);
        });
    });

    function updateCart(id, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            cart[itemIndex].quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
});
