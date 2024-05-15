const headerTemplate = document.createElement('template');
const footerTemplate = document.createElement('template');
let mainHeader = document.getElementById('main-header');
let mainFooter = document.getElementById('main-footer');

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
mainFooter.appendChild(footerTemplate.content);