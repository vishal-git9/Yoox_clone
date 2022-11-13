import {navbar} from "./components/navbar.js"
let get_nav = document.getElementById("navbar")
get_nav.innerHTML = navbar()

let data =JSON.parse(localStorage.getItem("cart_product"))
const append_cart_data = (data)=>{
    let count = 0
    let stable  = 0
    let price_obj = {}
    let get_count = document.getElementById("item_num")
    let get_count2 = document.getElementById("item_count")
    let get_div = document.getElementById("appendshopping")
    console.log(get_div)
    get_div.innerHTML = null
    data.forEach((el,index) => {
        count++
        stable += Number(el.sale_price.amount)
        get_div.innerHTML += `<div>
        <div id="img">
        <div>
            <img src=${el.goods_img} alt="">
        </div>
        <div>
            <h5>${el.goods_name}</h5>
            <p>${el.cate_name}</p>
        </div>
    </div>
    <div id="color">
<p>${el.productDetails[0].attr_value}</p>
    </div>
    <div id="remove_product">remove<i class="fa-solid fa-xmark"></i>
    </div>
    <div id="increment">
    <i class="fa-solid fa-plus" id="inc"></i>
    <i class="fa-solid fa-minus" id=""dec></i>
    </div>
    <div id="size">
        <p>s(international size)</p>
    </div>
    <div id="no">
        <p>1</p>
    </div>
    <div id="price">
<p class="discount">
    <span id="delete">  <del>US$329</del>   </span>
  70%off</p>
<p>US$<span id="item_price">${el.sale_price.amount}</span></p>
    </div>
    </div>`

    // creating an obj for product price
    if(price_obj[count]==undefined){
        price_obj[count] = Number(el.sale_price.amount)
    }
    // for removing product
    let get_remove_btn = document.querySelectorAll("#remove_product")
    get_remove_btn.forEach((el,index)=>{
        el.onclick = ()=>{
            remove_product(index)
        }
    })
    });
    // for increasing product number
    // for count 
    get_count.innerText = count
    get_count2.innerText = count
    //
    checkout_price(price_obj)
    // proceed buttons
}

append_cart_data(data)

// taking to the payment page

const payment_page = (sum)=>{
    localStorage.setItem("total_amount",sum)
    window.location.href = "payment.html"
}

// for removing from localstorage

function remove_product(index){
    data.splice(index,1)
    localStorage.setItem("cart_product",JSON.stringify(data))
    append_cart_data(data)
}

function checkout_price(price_obj){
    // let item_price = document.querySelectorAll("#item_price")
    // console.log(item_price)
    // item_price[index].innerText = `US$ ${item_total}`
    let item_total = 0
    console.log(price_obj)
    for (const key in price_obj) {
        if (key==="1") {
            console.log("hi")
        }
        console.log(key)
        item_total  += price_obj[key]
    }
    let tax = Math.floor(item_total*18/100)
    let shipping = 26
    // for total sum
    let total_sum = item_total + tax + shipping
    // for appending values
    let item_value = document.getElementById("total_sum")
    item_value.innerText =`US$ ${item_total}`
    let tax_value = document.getElementById("total_taxes")
    tax_value.innerText = `US$ ${tax}`
    let total_val = document.getElementById("total_val")
    total_val.innerText = `US$ ${total_sum}`
    // for proceeding
    let proceed_btn = document.querySelectorAll("#proccedBuy")
    proceed_btn.forEach(el=>{
        el.onclick = ()=>{
            payment_page(total_sum)
        }
    })
}

let get_inc_btn = document.querySelectorAll("#inc")
get_inc_btn.forEach((el,i)=>{
    let count = 1
    let count_obj = {}
    el.onclick = ()=>{
        count++
        if(count_obj[i]==undefined){
            count_obj[i] = count
        }else{
            count_obj[i]++
        }
        console.log(count_obj)
        get_data_price(count_obj)
    }
})
let get_price_text = document.querySelectorAll("#item_price")
function get_data_price(count){
    data.forEach((el,index) => {
        for (const key in count) {
            if(index==key){
                let value = Number(el.sale_price.amount)
                el.sale_price.amount = value*count[key]
                localStorage.setItem("cart_product",JSON.stringify(data))
                append_cart_data(data)
            }
        }
    });
}


