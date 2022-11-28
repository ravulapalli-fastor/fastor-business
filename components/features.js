

function features(){
    return `
    <h1 class="features__title">You Name It, We Have It!</h1>
    <p class="features__description">
      Everything your Online Business needs...
    </p>
    <div class="features__card_container">
  
      <!-- first row -->
       <div class="features__row">
            <div class="features__card">
            <img  class="features__card_img" src="./img/fetureIcon1.svg" 
             
            alt="feature"/>
            <h3 class="features__card_title">QR Ordering</h3>
          </div>
          <a href="./payment.html">
          <div class="features__card">
            <img  class="features__card_img" src="./img/fetureIcon2.svg" alt="feature"/>
            <h3 class="features__card_title">Payments</h3>
          </div>
          </a>
          <div class="features__card pos_desktop">
            <img  class="features__card_img" src="./img/fetureIcon3.svg" alt="feature"/>
            <h3 class="features__card_title">POS</h3>
          </div>
          <a href="./logistics.html">
          <div class="features__card">
            <img class="features__card_img" src="./img/fetureIcon4.svg" alt="feature"/>
            <h3 class="features__card_title">Logistics</h3>
          </div>
          </a>
        </div>
  
        
        <div class="features__row">
           <div class="features__card">
             <img class="features__card_img" src="./img/fetureIcon5.svg" alt="feature"/>
             <h3 class="features__card_title">Online Store</h3>
           </div>
           <div class="features__card">
             <img class="features__card_img" src="./img/fetureIcon6.svg" alt="feature"/>
            <h3 class="features__card_title">Online Ordering</h3>
           </div>
           <div class="features__card">
             <img class="features__card_img" src="./img/fetureIcon7.svg" alt="feature"/>
             <h3 class="features__card_title">Catalogue</h3>
           </div>
       </div>
       <div class="features__row">
       <div class="features__card">
         <img class="features__card_img" src="./img/fetureIcon8.svg" alt="feature"/>
         <h3 class="features__card_title">Offers &amp; Coupons</h3>
       </div>
       <div class="features__card pos_mobile">
         <img  class="features__card_img" src="./img/fetureIcon3.svg" alt="feature"/>
         <h3 class="features__card_title">POS</h3>
       </div>
     <div class="features__card">
         <img class="features__card_img" src="./img/fetureIcon9.svg" alt="feature"/>
         <h3 class="features__card_title">Custom Domain</h3>
       </div>
     </div>
</div>

    
    `
}

export {features};