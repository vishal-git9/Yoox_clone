
    const products = async ()=>{
        let res  = await fetch(`https://unofficial-shein.p.rapidapi.com/products/list?cat_id=1981&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=20&page=1`,{
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
        let container = document.getElementById("container")
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

    function products_details(id){
        localStorage.setItem("product-id",id)
        window.location.href = "products_details.html"
    }