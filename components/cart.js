function cart(){
    return `
    <div>
        <button id="checkout_page">GO TO SHOPPING BAG</button>
    </div>
    <div>
        <span>SUBTOTAL <span id="total_cart">$2100</span></span>
        <p><span id="count_cart">1</span> item in your shopping bag</p>
    </div>
    <div>
        <img src="https://www.yoox.com/images/items/12/12956627ea_14_f.jpg?width=50&height=63&impolicy=crop&gravity=Center" alt="" id="cart_product_image">
        <div>
            <p id="cloth_name">2 x McQ Alexander McQueen</p>
            <p id="item_price">US$303</p>
        </div>
    </div>
    <div>
        <img src="https://www.yoox.com/images/yoox80/banners/6965_2_cart_DM_W_ROW.png?634485886601286852" alt="">
        <img src="https://www.yoox.com/images/yoox80/banners/6965_1_cart_DM_M_ROW.png?634485886601286852" alt="">
    </div>`
}

export {cart}