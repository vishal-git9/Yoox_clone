const navbar=()=>{
    return `
    <div id="user-bar">
        <div class="userbar-left">
            <h5>INDIA</h5>
            <h5>CUSTOMER CARE</h5>
        </div>
        <div class="userbar-right">
            <a href="register.html"><h5> REGISTER</h5></a>
            <a href="login.html"><h5>LOGIN</h5></a>
        </div>

    </div>
    <div id="userbar-secondary">

        <div id="cat">
            <h5 id="womens_page">WOMENS</h5><h5 id="mens_page">MENS</h5><h5 id="kids_page">KIDS</h5><h5 id="design_page">DESIGN&ART</h5>
        </div>
        <div>
            <img src="https://i.ibb.co/Gc7P5LS/CRUX-removebg-preview.png" alt="">
        </div>
        <div>
            <span class="material-symbols-outlined">
                search
            </span>
            <span class="material-symbols-outlined">
                favorite
            </span>
            <span class="material-symbols-outlined" id="shopping-bag">
                shopping_bag
            </span>
            <span id="item_count">0</span>
        </div>

    </div>
    <div id="menu-section">
        <div>
            <p id="newarrivals">NEW ARRIVALS</p>
            <p id="designers">DESIGNERS</p>
            <p id="clothing">CLOTHING</p>
            <p id="shoes">SHOES</p>
            <p id="accessories">ACCESSORIES</p>
            <p id="eight">8 BY YOOX</p>
            <p id="yooxygen">YOOXYGEN</p>
            <p id="collab">COLLABORATIONS</p>
            <p id="bestdeal">BEST DEALS</p>
            <p id="gift">GIFT GUIDE</p>

        </div>
       
       

    </div>

`
}

export {navbar}