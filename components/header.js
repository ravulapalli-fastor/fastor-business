
function header(imageSrc){
    return `
        <header class="header__inner_container">
          <div class="header__logo_hamburger" for="menu__toggle">
          <a href="./index.html">
            <Image class="header__logo" src="./img/logo.svg" alt="logo" />
            </a>
            <!-- <a class="header__mobile_btn" href="https://becho.fastor.ai/">
              <button id="header__btn_id" class="btn btn-primary">
                Get Started
                <Image
                  style="display:inline-block;margin-left: 0.5rem"
                  src="./fonts/arrow-right.svg"
                  alt="arrow-right"
                /></button>
            </a> -->
            <!-- uncomment for hamburger/menu --> 
             <img
              class="header__hamburger_menu"
              onclick="menuClicked()"
              src="img/hamburgerMenu.svg"
              alt="hamburgerMenu"
            />
            <img
              class="header__hamburger_close"
              onclick="closeMenu()"
              src="img/hamburgerClose.svg"
              alt="hamburgerClose"
            />
          </div>
          <nav class="header__nav">
            <ul>
              <li><a class="header__menu_item" href="#">Product</a></li>
              <li><a class="header__menu_item" href="#">Businesses</a></li>
              <li><a class="header__menu_item" href="#">Channels</a></li>
              <li><a class="header__menu_item" href="#">Pricing</a></li>
              <li><a class="header__menu_item" href="#">Learn</a></li>
              <li><a class="header__menu_item" href="#">About</a></li>
              <li>
                <a href="https://becho.fastor.ai/"
                  ><button id="header__btn_id_desktop" class="btn btn-primary">
                    Get Started
                    <Image
                      style="display: inline-block; margin-left: 0.8rem"
                      src="./fonts/arrow-right.svg"
                      alt="arrow-right"
                    /></button
                ></a>
              </li>
            </ul>
          </nav>
        </header>

    

    `
}

export {header};