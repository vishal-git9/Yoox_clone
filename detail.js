import { navbar } from "./components/navbar.js"; 

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();


let val = localStorage.getItem("product-id")
console.log(val)
const get_details = async ()=>{
    let details = await fetch(`https://unofficial-shein.p.rapidapi.com/products/detail?goods_id=${val}&language=en&country=US&currency=USD`,{
        headers: {
            'X-RapidAPI-Key': '204a42f1f1msh3c2dccde72362b2p16ec65jsndbd11d5ee971',
            'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
    }
    })
    let data = await details.json()
    let get_add_button = document.getElementById("addbag")
    get_add_button.onclick = ()=>{
        add_to_cart(data)
    }
    let final = data.info.nowater_gallery.detail_image
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
}