const headerTemplate = document.createElement('template');
const footerTemplate = document.createElement('template');
let mainHeader = document.getElementById('main-header');
let mainFooter = document.getElementById('main-footer');

headerTemplate.innerHTML = `
<nav class="navbar">
    <!--Logo-->
    <div class="nav__logo">
        <a>
            <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/logo.png?raw=true" class="nax__logo-img" alt="Logo" >
        </a>
    </div>

    <div class="nav__menu">
        <!--Search-->
        <div>
            <div class="nav__search">
                <input type="search" id="input-box" class="nav__search-input" placeholder="Seacrh" autocomplete="off ">
                <button class="nav__search-btn"><i class="nav__search-icon fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div class="nav__search-result">
            </div>
        </div>

        <ul class="nav__catalogue">
            <!--Catelogue-->
            <li class="nav__catelogue-item">
                <a href="#" class="nav-catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/dog.png?raw=true" class="nav__catelogue-logo" alt="Dog catalogue">
                    <p>Dog</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav-catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/cat.png?raw=true" class="nav__catelogue-logo" alt="Cat catalogue">
                    <p>Cat</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav-catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/horse.png?raw=true" class="nav__catelogue-logo" alt="Horse catalogue">
                    <p>Horse</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav-catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/small_pet.png?raw=true" class="nav__catelogue-logo" alt="Small Pets catalogue">
                    <p>Small Pets</p>
                </a>
            </li>
            <li class="nav__catelogue-item">
                <a href="#" class="nav-catelogue-link">
                    <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/farm.png?raw=true" class="nav__catelogue-logo" alt="Farm catalogue">
                    <p>Farm</p>
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
        <a>
            <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/cart.png?raw=true" alt="cart" class="nav__cart-img">
        </a>
    </div>
</nav>
`

footerTemplate.innerHTML = `
<img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/footer/Boarder%204%201.png?raw=true" alt="cat claw" class="info__decor">
<div class="info-container">
    <!-- section -->
    <div class="section-container">
        <ul class="section">
            <li class="section__heading">
                <a href="#" class="section__heading-text">COPORATE</a>
            </li>
            <li class="section__list">
                <a href="#" class="section__list-text">Privacy Policy</a>
                <a href="#" class="section__list-text">Retuns & Refund</a>
                <a href="#" class="section__list-text">Term & Condition</a>
                <a href="#" class="section__list-text">Delivery</a>
            </li>
        </ul>

        <ul class="section">
            <li class="section__heading">
                <a href="#" class="section__heading-text">ABOUT US</a>
            </li>
            <li class="section__list">
                <p class="section__list-text">
                    Pet Horse and Farm,<br/>the revamped animal<br/>feed store formaerly<br/>
                    known as Essendon Produce
                </p>
            </li>
        </ul>
        

        <ul class="section">
            <li class="section__heading">
                <a href="#" class="section__heading-text">CONTACT US</a>
            </li>
            <li class="section__list">
                <p class="section__list-text">Unit 2C, <br/>Thor Court, Keilor East,<br/> VIC 3033</p>
            </li>
        </ul>

        <div class="section">
            <div>
                <p class="section__heading section__heading-text">SUBSCRIBE</p>
            </div>
            <div class="section__email"> 
                <input type="email" placeholder="Email Address" class="section__email-input montserrat">
                <button class="section__email-btn"><img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/footer/email.png?raw=true" class="secction__email-btn-icon"></button>
            </div>
        </div>
    </div>

    <!--bottom-->
    <div class="bottom__container">
        <div class="bottom__icons-container">
            <div class="bottom__icon--media">
                <a href="#" class="icon__media"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="icon__media"><i class="fa-brands fa-instagram icon_social_media"></i></a>
            </div>

            <div class="bottom__icon--payment">
                <a href="#" class="icon__payment"><i class="fa-brands fa-cc-visa"></i></a>
                <a href="#" class="icon__payment"><i class="fa-brands fa-cc-mastercard"></i></a>
                <a href="#" class="icon__payment"><i class="fa-brands fa-cc-paypal"></i></a>
            </div>
            
            <p class="section__copyright-text">Copy right @ 2024 Pet Horse & Farm. Powered by Shopify</p>
        </div> 
    </div>
</div>
`
mainHeader.appendChild(headerTemplate.content);
mainFooter.appendChild(footerTemplate.content);