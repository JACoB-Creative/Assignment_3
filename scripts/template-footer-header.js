const headerTemplate = document.createElement('template');
const footerTemplate = document.createElement('template');
let mainHeader = document.getElementById('main-header');
let mainFooter = document.getElementById('main-footer');

headerTemplate.innerHTML = `
<nav class="navbar">
    <!--Logo-->
    <div class="nav-logo">
        <a>
            <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/logo.png?raw=true" class="logo" alt="Logo" >
        </a>
    </div>

    <div class="nav-menu">
        <!--Search-->
        <div class="search-box">
            <div class="search">
                <input type="search" id="input-box" class="search-input" placeholder="Seacrh" autocomplete="off ">
                <button class="search-button"><i class="search-icon fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div class="result-box">
            </div>
        </div>

        <ul class="nav-catalogue">
            <!--Catelogue-->
            <li class="nav-item">
                <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/dog.png?raw=true" class="catelogue-logo" alt="Dog catalogue">
                <a href="#" class="nav-link">Dog</a>
            </li>
            <li class="nav-item">
                <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/cat.png?raw=true" class="catelogue-logo" alt="Cat catalogue">
                <a href="#" class="nav-link">Cat</a>
            </li>
            <li class="nav-item">
                <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/horse.png?raw=true" class="catelogue-logo" alt="Horse catalogue">
                <a href="#" class="nav-link">Horse</a>
            </li>
            <li class="nav-item">
                <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/small_pet.png?raw=true" class="catelogue-logo" alt="Small Pets catalogue">
                <a href="#" class="nav-link">Small Pets</a>
            </li>
            <li class="nav-item">
                <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/catelogue/farm.png?raw=true" class="catelogue-logo" alt="Farm catalogue">
                <a href="#" class="nav-link">Farm</a>
            </li>
        </ul>
    </div>

    <!--Hamburger menu-->
    <div class="nav-hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>

    <div class="nav-cart">
        <a>
            <img src="https://github.com/JACoB-Creative/Assignment_3/blob/main/images/top_nav/cart.png?raw=true" alt="cart" class="cart">
        </a>
    </div>
</nav>
`

footerTemplate.innerHTML = `
<div class="site_footer_container">
            <div class="site_footer">
                <ul class="footer_block">
                    <li class="footer_heading">
                        <p>COPORATE</p>
                        <a href="#">COPORATE</a>
                    </li>
        
                    <li class="footer_list">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Retuns & Refund</a>
                        <a href="#">Term & Condition</a>
                        <a href="#">Delivery</a>
                    </li>
                </ul>
        
                <ul class="footer_block">
                    <li class="footer_heading">
                        <p>ABOUT US</p>
                    </li>

                    <li class="footer_list">
                        <p>
                            Pet Horse and Farm,<br/>the revamped animal<br/>feed store formaerly<br/>
                            known as Essendon Produce
                        </p>
                    </li>
                </ul>
                
        
                <ul class="footer_block">
                    <li class="footer_heading">
                        <p>CONTACT US</p>
                    </li>
        
                    <li class="footer_list">
                        <p>Unit 2C, <br/>Thor Court, Keilor East,<br/> VIC 3033</p>
                    </li>
                </ul>
        
                <div class="footer_block">
                    <div class="footer_email"> 
                        <input type="email" placeholder="Email Address" class="footer_email_text">
                        <div class="email_btn_icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>

                    </div>
                </div>
            </div>

            <div class="footer_bottom_block">
                <div class="footer_bottom_icons">
                    <div class="icon_social_media">
                        <a href="#"><i class="fa-brands fa-facebook icon_social_media"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram icon_social_media"></i></a>
                    </div>

                    <div class="icon_payment">
                        <a href="#"><i class="fa-brands fa-cc-visa icon_payment"></i></a>
                        <a href="#"><i class="fa-brands fa-cc-mastercard icon_payment"></i></a>
                        <a href="#"><i class="fa-brands fa-cc-paypal icon_payment"></i></a>
                    </div>
                    
                    <p>Copy right @ 2024 Pet Horse & Farm. Powered by Shopify</p>
                </div> 
            </div>
        </div>
`
mainHeader.appendChild(headerTemplate.content);
mainFooter.appendChild(footerTemplate.content);