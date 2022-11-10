
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
    let final = data.info.nowater_gallery.detail_image
    products_details(final)
}

get_details()

const products_details = (data)=>{
    let detail_image  = document.getElementById("details")
    detail_image.innerHTML = null
    data.forEach(el => {
        let div = document.createElement("div")
        let small_div = document.createElement("div")
        let image = document.createElement("img")
        image.src = el.origin_image
        small_div.append(image)
        div.append(small_div)
        detail_image.append(div)
    });
}