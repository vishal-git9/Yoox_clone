import { navbar } from "./components/navbar.js"; 

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();





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

// for woman - 2030
// for kids  - 2031
// for men  - 2026


// for sorting

// One of the following : 0-Recommend|7-Top rated|8-Most popular|9-New arrivals|10-Price low to high|11-Price high to low
const products = async ()=>{
  let res  = await fetch(`https://unofficial-shein.p.rapidapi.com/products/list?cat_id=2031&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=20&page=${page_count}`,{
      headers: {
  'X-RapidAPI-Key': '204a42f1f1msh3c2dccde72362b2p16ec65jsndbd11d5ee971',
  'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
}
  })
  let data = await res.json()
  let final  = data.info.products
  console.log(final)
  append(final)
}
products()

const append = (data)=>{
  let container = document.getElementById("post")
  container.innerHTML = null
  data.forEach(el => {
      let div  = document.createElement("div")
      let img = document.createElement("img")
      img.onclick = ()=>{
          products_details(el.badge.goods_id)
      }
      img.src = el.goods_img
      div.append(img)
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

let get_key = document.querySelectorAll("#sorting>p")
get_key.forEach((e)=>{
  e.onclick = ()=>{
    let val = e.innerText
    let sortnum = 7
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
  let res  = await fetch(`https://unofficial-shein.p.rapidapi.com/products/list?cat_id=2031&adp=10170797&language=en&country=US&currency=USD&sort=${val}&limit=20&page=${page_count}`,{
      headers: {
  'X-RapidAPI-Key': '204a42f1f1msh3c2dccde72362b2p16ec65jsndbd11d5ee971',
  'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
}
  })
  let data = await res.json()
  let final  = data.info.products
  console.log(final)
  append(final)
}



















function products_details(id){
  localStorage.setItem("product-id",id)
  window.location.href = "products_details.html"
}