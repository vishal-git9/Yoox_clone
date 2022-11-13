import {navbar} from "../components/navbar.js"
let get_nav = document.getElementById("navbar")
get_nav.innerHTML = navbar()
// 
let get_sum = document.getElementById("dynamic")
    let sum = localStorage.getItem("total_amount")
    get_sum.innerText = sum
    let button_first = document.getElementById("b1")
    // for showing the real data
    let data = JSON.parse(localStorage.getItem("cart_product"))
    function get_count(){
    let count = 0
    data.forEach(el => {
        count++
    });
    let get_count2 = document.getElementById("item_count")
    get_count2.innerText = count
}
get_count()
    button_first.onclick = ()=>{
        check()
    }
    let button_second = document.getElementById("b2")
    button_second.onclick = ()=>{
        checkout()
    }
function check(){
    var card_no = document.querySelector("#cardno").value;
    var name = document.getElementById("name").value
    var cvv = document.getElementById("cvvv").value
    console.log(card_no,name,cvv)
    if(card_no.length>=16 && cvv.length==3 && name.length>0){
        swal({
            title: "Your Order is on the way!",
            text: "Hurrah!",
            icon: "success",
            button: "Okay!",
            timer: 2000,
          });
          localStorage.removeItem("cart_product")
          get_count()
          setTimeout(() => {
            window.location.href = "womens.html"
          }, 3000);
    }
    else{
        swal({
            title: "Please fill all the details correctly!",
            icon: "error",
            button: "Okay!",
          })
    }
}

function checkout(){
    window.location.href = "checkout.html"
}