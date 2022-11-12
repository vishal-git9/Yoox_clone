
function check(){
    var card_no = document.querySelector("#cardno").value;
    var name = document.getElementById("name").value
    var cvv = document.getElementById("cvvv").value

    console.log(card_no,name,cvv)
    if(card_no.length>=16 && cvv.length==3 && name.length>0){
alert("YOUR ORDER HAS BEEN SUCCEFULLY PLACED","\n","Thanks for shopping With us")
window.location.href = "home.html"
    }
    else{
        alert("PLEASE FILL DETAILS CORRECTLY")
    }
}
