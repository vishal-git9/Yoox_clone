// import { footer } from "./components/footer.js";

// let footer_part = document.getElementById("footer-part")
// footer_part.innerHTML  = footer()
console.log("hi")

let get_womens = document.getElementById("womens_page")
get_womens.onclick  = ()=>{
    let val = get_womens.innerText
    localStorage.setItem("set_request",val)
    window.location.href = "womens.html"
}
let get_mens = document.getElementById("mens_page")
get_mens.onclick  = ()=>{
    let val = get_mens.innerText
    localStorage.setItem("set_request",val)
    window.location.href = "mens.html"
}
let get_kids = document.getElementById("womens_page")
get_kids.onclick  = ()=>{
    let val = get_kids.innerText
    localStorage.setItem("set_request",val)
    window.location.href = "kids.html"
}
let get_art = document.getElementById("design_page")
get_art.onclick  = ()=>{
    window.location.href = "art.html"
}