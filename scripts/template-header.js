const headerTemplate = document.createElement('template');
let mainHeader = document.getElementById('main-header');

headerTemplate.innerHTML = `
<nav class="navbar">
    <!--Logo-->
    <div class="nav__logo">
        <a href="index.html">
            <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/logo.png?raw=true" class="nax__logo-img" alt="Logo" >
        </a>
    </div>

    <div class="nav__menu">
        <!--Search-->
        <div>
            <div class="nav__search">
                <input type="search" id="input-box" class="nav__search-input" placeholder="Seacrh" autocomplete="off ">
                <button class="nav__search-btn" onclick="window.location.href='product-list.html'"><i class="nav__search-icon fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div class="nav__search-result">
            </div>
        </div>

        <ul class="nav__catalogue">
            <!--Catelogue-->
            <li class="nav__catelogue-item">
                <a href="product-list.html" class="nav__catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/dog.png?raw=true" class="nav__catelogue-logo" alt="Dog catalogue">
                    <p class="nav__catelogue-text">Dog</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav__catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/cat.png?raw=true" class="nav__catelogue-logo" alt="Cat catalogue">
                    <p class="nav__catelogue-text">Cat</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav__catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/horse.png?raw=true" class="nav__catelogue-logo" alt="Horse catalogue">
                    <p class="nav__catelogue-text">Horse</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav__catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/small_pet.png?raw=true" class="nav__catelogue-logo" alt="Small Pets catalogue">
                    <p class="nav__catelogue-text">Small Pets</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav__catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/farm.png?raw=true" class="nav__catelogue-logo" alt="Farm catalogue">
                    <p class="nav__catelogue-text">Farm</p>
                </a>
            </li>
        </ul>
    </div>

    <!--Hamburger menu-->
    <div class="nav__hamburger">
        <span class="nav__hamburger-span"></span>
        <span class="nav__hamburger-span"></span>
        <span class="nav__hamburger-span"></span>
    </div>

    <div class="nav__cart">
        <a href="cart.html">
            <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/cart.png?raw=true" alt="cart" class="nav__cart-img">
            <span class="nav__cart-count nav__cart-count-text">0</span>
        </a>
    </div>
</nav>
`;

mainHeader.appendChild(headerTemplate.content);

document.addEventListener('DOMContentLoaded', function () {
    const cartCountElement = document.querySelector('.nav__cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalQuantity = cart.reduce((sum, item) => sum + parseInt(item.quantity), 0);
    cartCountElement.textContent = totalQuantity;
});
