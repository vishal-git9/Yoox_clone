import { navbar } from "./components/navbar.js"; 
import {cart} from "./components/cart.js"
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
let get_modal = document.getElementById("modal")
get_modal.innerHTML = cart()

let val = localStorage.getItem("product-id")
console.log(val)
const get_details = async ()=>{
    let details = await fetch(`https://unofficial-shein.p.rapidapi.com/products/detail?goods_id=${val}&language=en&country=US&currency=USD`,{
        headers: {
            'X-RapidAPI-Key': '9ea0e4551dmsh82920695f810e5ap12a458jsn13f417a97d49',
            'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
    }
    })
    let data = await details.json()
    let get_add_button = document.getElementById("addbag")
    get_add_button.onclick = ()=>{
        add_to_cart(data)
    }
    let final = data.info.nowater_gallery.detail_image
    console.log(data)
    image_details(final)
    product_details(data)
}

get_details()

const image_details = (data)=>{
    // product_images
        let get_image = document.querySelector("#image-one")
        get_image.src = data[0].origin_image
        let get_image2 = document.querySelector("#image-two")
        get_image2.src = data[1].origin_image
        let get_image3 = document.querySelector("#image_three")
        get_image3.src = data[2].origin_image
        let get_image4 = document.querySelector("#image-four")
        get_image4.src = data[3].origin_image
        let get_image5 = document.querySelector("#image-five")
        get_image5.src = data[4].origin_image
        // product_images
}

const product_details = ({info})=>{
    console.log(info)
    let get_name = document.getElementById("product_name")
    get_name.innerText = info.goods_name
    let get_cat = document.getElementById("product_category")
    get_cat.innerText = info.cate_name
    let get_price = document.getElementById("product_price")
    get_price.innerText = info.sale_price.amountWithSymbol
    // other_details
    let composition = document.getElementById("composition")
    composition.innerText = info.materialDetails[1].attr_value
    let details = document.getElementById("other_details")
    details.innerText = info.materialDetails[2].attr_value
    let product_code = document.getElementById("product_code")
    product_code.innerText = info.goods_id
}


// onclicking add to shopping bag

const add_to_cart = ({info})=>{
    let data =JSON.parse(localStorage.getItem("cart_product")) || []
    data.push(info)
    localStorage.setItem("cart_product",JSON.stringify(data))
    swal({
        title: "Good job!",
        text: "product has been added to the cart!",
        icon: "success",
        button: "okay!",
      });
      create_count(data)
      cart_data(product_data)
}
let data =JSON.parse(localStorage.getItem("cart_product")) || []
create_count(data)
function create_count(data){
    let count = 0
    let get_count = document.getElementById("item_count")
    data.forEach(el => {
    count++
    });
    get_count.innerText = count
}
// open cart

let get_bag = document.getElementById("shopping-bag")
get_bag.onclick = ()=>{
    let get_modal = document.getElementById("modal")
    get_modal.style.display = "flex"
}
let get_checkout_btn = document.getElementById("checkout_page")
document.onclick = function(event) {
    let get_modal = document.getElementById("modal")
    if (event.target != get_bag && event.target != get_modal && event.target != get_checkout_btn ) {
        get_modal.style.display = "none";
    }
}

// taking to the checkout page

get_checkout_btn.onclick = ()=>{
    window.location.href = "checkout.html"
}


// real data on modal

let product_data =JSON.parse(localStorage.getItem("cart_product"))

const cart_data = (data)=>{
    let count = 0
    let item_total = 0
    data.forEach(el => {
        count++
        item_total += Number(el.sale_price.amount)
    });

    let get_cart_sum = document.getElementById("total_cart")
    get_cart_sum.innerText = `US$ ${item_total}`;
    let get_cart_count = document.getElementById("count_cart")
    get_cart_count.innerText = count;
    // for image
    let get_cart_image = document.getElementById("cart_product_image")
    get_cart_image.src = data[0].goods_img
    // for cloth
    let get_cloth_name = document.getElementById("cloth_name")
    get_cloth_name.innerText = data[0].goods_name
    // for cloth price
    let get_cloth_price = document.getElementById("item_price")
    get_cloth_price.innerText = data[0].sale_price.amountWithSymbol
}
cart_data(product_data)