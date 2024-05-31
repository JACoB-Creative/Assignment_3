const footerTemplate = document.createElement('template');
let mainFooter = document.getElementById('main-footer');

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
mainFooter.appendChild(footerTemplate.content);