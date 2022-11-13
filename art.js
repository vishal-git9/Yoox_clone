import { navbar } from "./components/navbar.js"; 

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();


import { footer } from "./components/footer.js";

let footer_part = document.getElementById("footer-part")
footer_part.innerHTML  = footer()
console.log("hi")

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
