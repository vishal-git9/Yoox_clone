import { navbar } from "./components/navbar.js"; 

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
let data = JSON.parse(localStorage.getItem("cart_product")) || []
    function get_count(){
    let count = 0
    data.forEach(el => {
        count++
    });
    let get_count2 = document.getElementById("item_count")
    get_count2.innerText = count
}
get_count()
// for navigation
let get_women_page = document.getElementById("womens_page")
get_women_page.onclick = ()=>{
    window.location.href = "womens.html"
}
let get_men_page = document.getElementById("mens_page")
get_men_page.onclick = ()=>{
    window.location.href = "mens.html"
}
let get_kids_page = document.getElementById("kids_page")
get_kids_page.onclick = ()=>{
    window.location.href = "kids.html"
}
let get_design_page = document.getElementById("design_page")
get_design_page.onclick = ()=>{
    window.location.href = "art.html"
}
// 

console.log("hi")

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let page_count = 1
let requested_item = localStorage.getItem("set_request")
let send_item = localStorage.getItem("set_request") || 2026
let sortnum = 7

let get_item = document.querySelectorAll("#userbar-secondary>#cat>h5")
console.log(get_item)
get_item.forEach(el=>{
  el.onclick = ()=>{
    let val = el.innerText
    console.log(val)
    localStorage.setItem("set_request",val)
    if(val=="MENS"){
      window.location.href = "mens.html"
    }else if(val=="WOMENS"){
      window.location.href = "womens.html"
    }else if(val=="KIDS"){
      window.location.href = "kids.html"
    }else if(val=="DESIGN&ART"){
     console.log("hi")
    }
  }
})

// for sorting

// One of the following : 0-Recommend|7-Top rated|8-Most popular|9-New arrivals|10-Price low to high|11-Price high to low
const products = async ()=>{
  let res  = await fetch(`https://unofficial-shein.p.rapidapi.com/products/list?cat_id=${send_item}&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=20&page=${page_count}`,{
      headers: {
  'X-RapidAPI-Key': '4d0c031d6amshe2cf21ed2e88017p104014jsnd161c65b13e1',
  'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
}
  })
  let data = await res.json()
  let final  = data.info.products
  console.log(data)
  append(final)
}
products()

const append = (data)=>{
  console.log(data)
  let container = document.getElementById("post")
  container.innerHTML = null
  data.forEach(el => {
      let div  = document.createElement("div")
      let img = document.createElement("img")
      img.onclick = ()=>{
          products_details(el.goods_id)
      }
      img.src = el.goods_img
      let name = document.createElement("p")
      name.innerText = el.goods_name
      let price = document.createElement("p")
      price.innerText = el.salePrice.amountWithSymbol
      div.append(img,name,price)
      container.append(div)

  });
}
let get_inc = document.getElementById("page_inc")
get_inc.onclick = ()=>{
  page_count++
  let page_num = document.getElementById("page_count")
page_num.innerText = page_count
  products()
}
let get_dec = document.getElementById("page_dec")
get_dec.onclick = ()=>{
  if(page_count>1){
    page_count--
    console.log(page_count)
    let page_num = document.getElementById("page_count")
    page_num.innerText = page_count
    products()
  }
}

// for woman - 2030
// for kids  - 2031
// for men  - 2026
if(requested_item=="WOMENS"){
  send_item = 2030
  products()
}else if(requested_item == "MENS"){
  send_item = 2026
  products()
}else if(requested_item == "KIDS"){
  send_item = 2031
  products()
}

// sorting by latest , highest and lowest
let get_key = document.querySelectorAll("#sorting>p")
get_key.forEach((e)=>{
  e.onclick = ()=>{
    let val = e.innerText
    if(val == "LATEST ARRIVALS"){
      sortnum = 9
    }else if(val=="HIGHEST PRICE"){
      sortnum = 11
    }else if(val=="LOWEST PRICE"){
      sortnum = 10
    }
    sortby_content(sortnum)
  }
})
const sortby_content = async (val)=>{
  console.log(send_item)
  let res  = await fetch(`https://unofficial-shein.p.rapidapi.com/products/list?cat_id=${send_item}&adp=10170797&language=en&country=US&currency=USD&sort=${val}&limit=20&page=${page_count}`,{
      headers: {
  'X-RapidAPI-Key': '4d0c031d6amshe2cf21ed2e88017p104014jsnd161c65b13e1',
  'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
}
  })
  let data = await res.json()
  let final  = data.info.products
  console.log(data)
  append(final)
}

function products_details(id){
  localStorage.setItem("product-id",id)
  window.location.href = "detail.html"
}