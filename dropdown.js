import { navbar } from "./components/navbar.js"; 
import { footer } from "./components/footer.js";

let footer_part = document.getElementById("footer_part")
footer_part.innerHTML  = footer()
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
// for navigating pages
// for mens pages
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











let new_arrival=document.getElementById("newarrivals");
console.log(new_arrival)
new_arrival.addEventListener("click",dropdown1);

let container=document.getElementById("container")

function dropdown1(){
    container.innerHTML = null
    let div=document.createElement("div");

    let div1=document.createElement("div");
    div1.setAttribute("class","div1");

   
    

    let p1=document.createElement("p");
    p1.innerText="CLOTHING"
    p1.onclick = ()=>{
        window.location.href = "product.html"
    }
    let p2=document.createElement("p");
    p2.innerText="SHOES"

    let p3=document.createElement("p");
    p3.innerText="ACCESSORIES & BAGS"

    let p4=document.createElement("p");
    p4.innerText="VIEW ALL"
    
    let p5=document.createElement("p");
    p5.innerText="LATEST ARRIVALS"
    
    let p6=document.createElement("p");
    p6.innerText="THE PAST WEEK "


    
    let p7=document.createElement("p");
    p7.innerText="TOP DESIGNER"

  
    let p8=document.createElement("p");
    p8.innerText="UNIQUE FINDS"





    
   div1.append(p1,p2,p3,p4,p5,p6,p7,p8);

   let div2=document.createElement("div");
   div2.setAttribute("id","div2");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/items/14/14270715xr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"
   
   let image2=document.createElement("img");
   image2.src="https://www.yoox.com/images/items/50/50291958ce_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"


   let image3=document.createElement("img");
   image3.src="https://www.yoox.com/images/items/50/50291961lr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"


   let image4=document.createElement("img");
   image4.src="https://www.yoox.com/images/items/13/13908422si_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"


    div2.append(image1,image2,image3,image4)
    
   div.append(div1)
   
    div.append(div2)

    
    container.append(div)
}


let designer=document.getElementById("designers");
designer.addEventListener("click",dropdown2)



function dropdown2(){
    container.innerHTML = null
    let div=document.createElement("div");

    let div3=document.createElement("div");
    div3.setAttribute("class","div3");

   
    

    let p1=document.createElement("h2");
    p1.innerText="DESIGNERS"

    let p2=document.createElement("p");
    p2.innerText="ALAIA"

    let p3=document.createElement("p");
    p3.innerText="BALENCIAGA"

    let p4=document.createElement("p");
    p4.innerText="BOTTEGA VENETA"
    
    let p5=document.createElement("p");
    p5.innerText="BRUNELLO CUCINELLI"
    
    let p6=document.createElement("p");
    p6.innerText="CELINE"


    
    let p7=document.createElement("p");
    p7.innerText="CHLOE"

  
    let p8=document.createElement("p");
    p8.innerText="DIANE VON FURSTENBERG"

    let p9=document.createElement("p");
    p9.innerText="DOLCE & GABBANA"

    let p13=document.createElement("p");
    p13.innerText="DRIES VAN NOTEN"

    let p10=document.createElement("p");
    p10.innerText="FENDI"

    let p11=document.createElement("p");
    p11.innerText="GUCCI"

    let p12=document.createElement("p");
    p12.innerText="ISABEL MARANT"






    
   div3.append(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13);

   let extra_div=document.createElement("div");
   extra_div.setAttribute("class","extra");


   let p14=document.createElement("p");
   p14.innerText="JACQUEMUS";

   
   let p15=document.createElement("p");
   p15.innerText="JIL SANDER";


   
   let p16=document.createElement("p");
   p16.innerText="MAISON MARGILA";


   
   let p17=document.createElement("p");
   p17.innerText="MARNI";


   
   let p18=document.createElement("p");
   p18.innerText="MISSONI";

   
   let p19=document.createElement("p");
   p19.innerText="MIU MIU";

   
   let p20=document.createElement("p");
   p20.innerText="PARAD";

   extra_div.append(p14,p15,p16,p17,p18,p19,p20)

   let div4=document.createElement("div");
   div4.setAttribute("id","div4");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/6825_5_SeeByChloe_W_Second.jpg?634485886601286852"
   
   let image2=document.createElement("img");
   image2.src="https://www.yoox.com/images/yoox80/banners/6825_3_Prada_Small_W.jpg?634485886601286852"


   let image3=document.createElement("img");
   image3.src="https://www.yoox.com/images/yoox80/banners/6825_1_Balenciaga_W_Small.jpg?634485886601286852"



    div4.append(image1,image2,image3)
    
   div.append(div3,extra_div)
   
    div.append(div4)

    
    container.append(div)
}

let clothing=document.getElementById("clothing");
clothing.addEventListener("click",dropdown3)



function dropdown3(){
    container.innerHTML = null
    let div=document.createElement("div");

    let div3=document.createElement("div");
    div3.setAttribute("class","div3");

   let h2=document.createElement("h2");
   h2.innerText="CATEGORIES"
    

    let p1=document.createElement("p1");
    p1.innerText="DRESSES"

    let p2=document.createElement("p");
    p2.innerText="SWEATERS AND SWEATSHIRTS"

    let p3=document.createElement("p");
    p3.innerText="SHIRTS"

    let p4=document.createElement("p");
    p4.innerText="JEANS AND DENIM"
    
    let p5=document.createElement("p");
    p5.innerText="SKIRTS"
    
    let p6=document.createElement("p");
    p6.innerText="PANTS "


    
    let p7=document.createElement("p");
    p7.innerText="JUMPSUITS AND OVERALL"

  
    let p8=document.createElement("p");
    p8.innerText="T-SHIRTS AND TOPS"

    let p9=document.createElement("p");
    p9.innerText="ACTIVE WEARS"

    let p10=document.createElement("h3");
    p10.innerText="VIEW ALL"

    
    let p11=document.createElement("h3");
    p11.innerText="NEW ARRIVALS"

    
    let p12=document.createElement("h3");
    p12.innerText="SALE"






    
   div3.append(h2,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


   let extra=document.createElement("div");
   extra.setAttribute("class","extra_div");
  

   let h=document.createElement("h2");
   h.innerText="DESIGNERS"

   let p14=document.createElement("p");
   p14.innerText="BALENCIAGE";

   
   let p15=document.createElement("p");
   p15.innerText="DOLCE & GABBANA";


   
   let p16=document.createElement("p");
   p16.innerText="GUCCI";


   
   let p17=document.createElement("p");
   p17.innerText="MAISON MARGIELA";


   
   let p18=document.createElement("p");
   p18.innerText="MARNI";

   
   let p19=document.createElement("p");
   p19.innerText="PRADE";

   
   let p20=document.createElement("p");
   p20.innerText="RICK OWENS";

   let p21=document.createElement("p");
   p21.innerText="VALENTINO";

   let p22=document.createElement("p");
   p22.innerText="VERSACE";

   let p23=document.createElement("p");
   p23.innerText="8 BY YOOX";

   let p24=document.createElement("h2");
   p24.innerText="VIEW ALL DESIGNERS";

   extra.append(h,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24);

   
   let extra1=document.createElement("div");
   extra1.setAttribute("class","extra_div");
  

   let h7=document.createElement("h2");
   h7.innerText="INSPIRATION"

   let p25=document.createElement("p");
   p25.innerText="THE NEW STYLE GALLERY";

   
   let p26=document.createElement("p");
   p26.innerText="THE ART OF COAT";


   
   let p27=document.createElement("p");
   p27.innerText="BELOW-ZERO BUYS";


   
   let p28=document.createElement("p");
   p28.innerText="WONDERFUL WEDDINGS";


   
   let p29=document.createElement("p");
   p29.innerText="WHAT TO WEAR WITH SNEAKERS";

   
   let p30=document.createElement("p");
   p30.innerText="YOOXYGEN TO WEAR WITH SNEAKERS";

   
   let p31=document.createElement("p");
   p31.innerText="HI GUYZ";

   let p32=document.createElement("p");
   p32.innerText="BACK TO BASICS";

   let p33=document.createElement("p");
   p33.innerText="THE GRAND & MARVELOUS HOLIDAY FAIR";





   extra1.append(h7,p25,p26,p27,p28,p29,p30,p31,p32,p33)



   let div4=document.createElement("div");
   div4.setAttribute("id","div4");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/6824_1_ParedbackBohemian_DD_W.jpg?634485886601286852"


    div4.append(image1)
    
   div.append(div3,extra,extra1)
   
    div.append(div4)

    
    container.append(div)
}


let shoes=document.getElementById("shoes");
shoes.addEventListener("click",dropdown4)



function dropdown4(){
    container.innerHTML = null
    let div=document.createElement("div");

    let div3=document.createElement("div");
    div3.setAttribute("class","div3");

   let h2=document.createElement("h2");
   h2.innerText="CATEGORIES"
    

    let p1=document.createElement("p1");
    p1.innerText="ANKLE BOOTS"

    let p2=document.createElement("p");
    p2.innerText="BOOTS"

    let p3=document.createElement("p");
    p3.innerText="SNEAKERS"

    let p4=document.createElement("p");
    p4.innerText="PUMPS"
    
    let p5=document.createElement("p");
    p5.innerText="LOAFERS"
    
    let p6=document.createElement("p");
    p6.innerText="LACED SHOES"


    
    let p7=document.createElement("p");
    p7.innerText="CHELSEA BOOTS"

  
    let p8=document.createElement("p");
    p8.innerText="MULES AND CLOGS"

    let p9=document.createElement("p");
    p9.innerText="BALLET FLATS"

    let p10=document.createElement("h3");
    p10.innerText="VIEW ALL"

    
    let p11=document.createElement("h3");
    p11.innerText="NEW ARRIVALS"

    
    let p12=document.createElement("h3");
    p12.innerText="SALE"






    
   div3.append(h2,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


   let extra=document.createElement("div");
   extra.setAttribute("class","extra_div");
  

   let h=document.createElement("h2");
   h.innerText="DESIGNERS"

   let p14=document.createElement("p");
   p14.innerText="BALENCIAGE";

   
   let p15=document.createElement("p");
   p15.innerText="DOLCE & GABBANA";


   
   let p16=document.createElement("p");
   p16.innerText="GUCCI";


   
   let p17=document.createElement("p");
   p17.innerText="MAISON MARGIELA";


   
   let p18=document.createElement("p");
   p18.innerText="MARNI";

   
   let p19=document.createElement("p");
   p19.innerText="PRADE";

   
   let p20=document.createElement("p");
   p20.innerText="RICK OWENS";

   let p21=document.createElement("p");
   p21.innerText="VALENTINO";

   let p22=document.createElement("p");
   p22.innerText="VERSACE";

   let p23=document.createElement("p");
   p23.innerText="8 BY YOOX";

   let p24=document.createElement("h2");
   p24.innerText="VIEW ALL DESIGNERS";

   extra.append(h,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24);

   
   let extra1=document.createElement("div");
   extra1.setAttribute("class","extra_div");
  

   let h7=document.createElement("h2");
   h7.innerText="INSPIRATION"

   let p25=document.createElement("p");
   p25.innerText="THE SNEAKER CORNER";

   
   let p26=document.createElement("p");
   p26.innerText="ANKLE BOOTS";


   
   let p27=document.createElement("p");
   p27.innerText="MULES";


   
   let p28=document.createElement("p");
   p28.innerText="FLATS";


   
   let p29=document.createElement("p");
   p29.innerText="BOHO DREAMIN";

   
   let p30=document.createElement("p");
   p30.innerText="HI GUYZ";



   let p32=document.createElement("p");
   p32.innerText="BACK TO BASICS";

   let p33=document.createElement("p");
   p33.innerText="THE GRAND & MARVELOUS HOLIDAY FAIR";





   extra1.append(h7,p25,p26,p27,p28,p29,p30,p32,p33)



   let div4=document.createElement("div");
   div4.setAttribute("id","div4");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/6824_2_Boots_DD_W.jpg?634485886601286852"


    div4.append(image1)
    
   div.append(div3,extra,extra1)
   
    div.append(div4)

    
    container.append(div)
}

let accessories=document.getElementById("accessories");
accessories.addEventListener("click",dropdown5)



function dropdown5(){
    container.innerHTML = null

    let div=document.createElement("div");

    let div3=document.createElement("div");
    div3.setAttribute("class","div3");

   let h2=document.createElement("h2");
   h2.innerText="CATEGORIES"
    

    let p1=document.createElement("p1");
    p1.innerText="HANDBAGS"

    let p2=document.createElement("p");
    p2.innerText="BACKPACKS & FANNY PACKS"

    let p3=document.createElement("p");
    p3.innerText="JEWELRY"

    let p4=document.createElement("p");
    p4.innerText="WATCHES"
    
    let p5=document.createElement("p");
    p5.innerText="HATS"
    
    let p6=document.createElement("p");
    p6.innerText="EYEWEAR"


    
    let p7=document.createElement("p");
    p7.innerText="SCARVES AND FAULARDS"

  
    let p8=document.createElement("p");
    p8.innerText="BELTS"

    let p9=document.createElement("p");
    p9.innerText="WALLETS"

    let p10=document.createElement("h3");
    p10.innerText="VIEW ALL"

    
    let p11=document.createElement("h3");
    p11.innerText="NEW ARRIVALS"

    
    let p12=document.createElement("h3");
    p12.innerText="SALE"






    
   div3.append(h2,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


   let extra=document.createElement("div");
   extra.setAttribute("class","extra_div");
  

   let h=document.createElement("h2");
   h.innerText="DESIGNERS"

   let p14=document.createElement("p");
   p14.innerText="BALENCIAGE";

   
   let p15=document.createElement("p");
   p15.innerText="DOLCE & GABBANA";


   
   let p16=document.createElement("p");
   p16.innerText="GUCCI";


   
   let p17=document.createElement("p");
   p17.innerText="MAISON MARGIELA";


   
   let p18=document.createElement("p");
   p18.innerText="MARNI";

   
   let p19=document.createElement("p");
   p19.innerText="PRADE";

   
   let p20=document.createElement("p");
   p20.innerText="RICK OWENS";

   let p21=document.createElement("p");
   p21.innerText="VALENTINO";

   let p22=document.createElement("p");
   p22.innerText="VERSACE";

   let p23=document.createElement("p");
   p23.innerText="8 BY YOOX";

   let p24=document.createElement("h2");
   p24.innerText="VIEW ALL DESIGNERS";

   extra.append(h,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24);

   
   let extra1=document.createElement("div");
   extra1.setAttribute("class","extra_div");
  

   let h7=document.createElement("h2");
   h7.innerText="INSPIRATION"

   let p25=document.createElement("p");
   p25.innerText="BOHO DREAMIN";

   
   let p26=document.createElement("p");
   p26.innerText="HI GUYS";









   let p33=document.createElement("p");
   p33.innerText="THE GRAND & MARVELOUS HOLIDAY FAIR";





   extra1.append(h7,p25,p26,p33)



   let div4=document.createElement("div");
   div4.setAttribute("id","div4");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/6824_1_FocusOnWinterAcc_DD_W.jpg?634485886601286852"


    div4.append(image1)
    
   div.append(div3,extra,extra1)
   
    div.append(div4)

    
    container.append(div)
}

let eight=document.getElementById("eight");
eight.addEventListener("click",dropdown6)


function dropdown6(){
    container.innerHTML = null

    let div=document.createElement("div");

    let div1=document.createElement("div");
    div1.setAttribute("class","div1");

   
    

    let p1=document.createElement("p");
    p1.innerText="A WHOLE WORLD TO DISCOVER: A CREATIVE LAB RUN ON THE ENERGY OF 8 BY YOOX! GET INSPIRED…"
   

    let p2=document.createElement("h2");
    p2.innerText="DISCOVER MORE ...."

   let p3=document.createElement("p");
   p3.innerText="CATEGORIES"

   
   let p4=document.createElement("p");
   p4.innerText="CLOTHING"

   
   let p5=document.createElement("p");
   p5.innerText="SHOES"


   let p6=document.createElement("p");
   p6.innerText="ACCESSORIES AND BAGS"

   let p7=document.createElement("h2");
   p6.innerText="VIEW ALL"

   let p8=document.createElement("h2");
   p8.innerText="NEW ARRIVALS"


    
   div1.append(p1,p2,p3,p4,p5,p6,p7,p8);

   let div2=document.createElement("div");
   div2.setAttribute("id","div2");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/6833_1_8byoox_Dropdown_WM.png?634485886601286852"
   
   let image2=document.createElement("img");
   image2.src="https://www.yoox.com/images/yoox80/banners/6833_4_8byoox_Essential_DD_WM.jpg?634485886601286852"




    div2.append(image1,image2)
    
   div.append(div1)
   
    div.append(div2)

    
    container.append(div)
}


let yooxygen=document.getElementById("yooxygen");
yooxygen.addEventListener("click",dropdown7)


function dropdown7(){
    container.innerHTML = null
    let div=document.createElement("div");

    let div1=document.createElement("div");
    div1.setAttribute("id","komo");

   
    

    let p1=document.createElement("p");
    p1.innerText="YOOXYGEN IS THE DESTINATION DEDICATED TO SUSTAINABLE FASHION. DRIVE CHANGE THROUGH OUR EDIT OF BRANDS AND PRODUCTS THAT DEMONSTRATE A POSITIVE SOCIAL AND ENVIRONMENTAL IMPACT."
   

    let p2=document.createElement("p");
    p2.innerText="clothing"

   let p3=document.createElement("p");
   p3.innerText="CATEGORIES"

   
   let p4=document.createElement("p");
   p4.innerText="CLOTHING"

   
   let p5=document.createElement("p");
   p5.innerText="SHOES"


   let p6=document.createElement("p");
   p6.innerText="ACCESSORIES AND BAGS"

   let p7=document.createElement("h2");
   p7.innerText="VIEW ALL"

   let p8=document.createElement("h2");
   p8.innerText="NEW ARRIVALS"


    
   div1.append(p1,p2,p3,p4,p5,p6,p7,p8);

   let div2=document.createElement("div");
   div2.setAttribute("id","div2");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/5460_1_ModernArtisan_DropdownBIG.jpg?634485886601286852"
   
   let image2=document.createElement("img");
   image2.src="https://www.yoox.com/images/yoox80/banners/5460_3_Yooxygen_W_Small.png?634485886601286852"

  let image3=document.createElement("img");
  image3.src="https://www.yoox.com/images/yoox80/banners/6825_1_CaraXKarl_DDsmall.jpg?634485886601286852"


    div2.append(image1,image2,image3)
    
   div.append(div1)
   
    div.append(div2)

    
    container.append(div)
}

let collab=document.getElementById("collab");
collab.addEventListener("click",dropdown8)

function dropdown8(){
    container.innerHTML = null
    let div=document.createElement("div");

    let div1=document.createElement("div");
    div1.setAttribute("id","komo");

   
    

    let p1=document.createElement("p");
     p1.innerText="EXCLUSIVE COLLABORATIONS, LIMITED EDITIONS AND NEW FASHION AND SPORTSWEAR COLLECTIONS: DISCOVER THEM NOW!"
   

    let p2=document.createElement("p");
    p2.innerText="FULRA"

   let p3=document.createElement("p");
   p3.innerText="MONTBLANC"

   
   let p4=document.createElement("p");
   p4.innerText="SEE BY CHOLE"




   let p7=document.createElement("h2");
   p7.innerText="VIEW ALL"




    
   div1.append(p1,p2,p3,p4,p7);

   let div2=document.createElement("div");
   div2.setAttribute("id","div2");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/6825_1_MontblancOnTheMove_DD.jpg?634485886601286852"
   
   let image2=document.createElement("img");
   image2.src="https://www.yoox.com/images/yoox80/banners/6825_2_NewBalance_W_DD.jpg?634485886601286852"

  

    div2.append(image1,image2)
    
   div.append(div1)
   
    div.append(div2)

    
    container.append(div)
}


let bestdeal=document.getElementById("bestdeal");
bestdeal.addEventListener("click",dropdown9);


function dropdown9(){
    container.innerHTML = null
    let div=document.createElement("div");

    let div1=document.createElement("div");
    div1.setAttribute("id","komo");

   
    

    let p1=document.createElement("p");
     p1.innerText="CLOTHING"
   

    let p2=document.createElement("p");
    p2.innerText="SHOES"

   let p3=document.createElement("p");
   p3.innerText="ACCESSORIES AND BAGS"

   
 



   let p11=document.createElement("h2");
   p11.innerText="VIEW ALL"

   let p5=document.createElement("p");
   p5.innerText="NEW REDUCTIONS"


   
   let p6=document.createElement("p");
   p6.innerText="LAST PIECES"


   
   let p7=document.createElement("p");
   p7.innerText="UNDER $100"


   
   let p8=document.createElement("p");
   p8.innerText="TOP BRAND"


   
   let p9=document.createElement("p");
   p9.innerText="BIG OFFER"


   
   let p10=document.createElement("p");
   p10.innerText="EVERYDAY OCCASSION"




    
   div1.append(p1,p2,p3,p11,p5,p6,p7,p8,p9,p10);

   let div2=document.createElement("div");
   div2.setAttribute("id","div2");


   let image1=document.createElement("img");
   image1.src="https://www.yoox.com/images/yoox80/banners/6944_3_NewReduction_DD_UK.jpg?634485886601286852"
   
   let image2=document.createElement("img");
   image2.src="https://www.yoox.com/images/yoox80/banners/6944_1_Occasion_DD_EU.jpg?634485886601286852"

    let image3=document.createElement("img");
    // image3.setAttribute("id","ima3")
    image3.src="https://www.yoox.com/images/yoox80/banners/6944_2_BigOffers_DD_EU.jpg?634485886601286852"

    div2.append(image1,image2,image3)
    
   div.append(div1)
   
    div.append(div2)

    
    container.append(div)
}
