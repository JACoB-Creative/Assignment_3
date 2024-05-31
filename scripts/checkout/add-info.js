document.addEventListener('DOMContentLoaded', function () {
    const checkoutInfoContainer = document.getElementById('checkout-info');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('layout__flex-row', 'summary__text');
        itemElement.innerHTML = `
            <p class="align__self-left">${item.name}</p>
            <p class="align__self-right">${item.quantity}</p>
        `;
        checkoutInfoContainer.appendChild(itemElement);
    });
});
