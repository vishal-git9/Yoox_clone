


// // function   signup(){
// //     let entered_email = document.getElementById("email").value
// // let entered_password = document.getElementById("password").value;
// //     console.log(entered_email,entered_password)
// //     // console.log("gsdfgfsdfgsdfsf")
// //     if(entered_password.length<8 && (!entered_password.includes("@"))){
// //         alert("Check your password")
// //      }else if(entered_password.length>8){
// //         alert("succcessful")
// //      }
// //     localStorage.setItem("email",entered_email);
// //     localStorage.setItem("password",entered_password)
    
// // }
// function signup(){

//     var name = document.getElementById('email');
//     var pw = document.getElementById('password');
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;

//     if(name.value.length == 0){
//         alert('Please fill in email');

//     }else if(pw.value.length == 0){
//         alert('Please fill in password');

//     }else if(name.value.length == 0 && pw.value.length == 0){
//         alert('Please fill in email and password');

//     }else if(pw.value.length < 8){
//         alert('Max of 8');

//     }else if(!pw.value.match(numbers)){
//         alert('please add 1 number');

//     }else if(!pw.value.match(upperCaseLetters)){
//         alert('please add 1 uppercase letter');

//     }else if(!pw.value.match(lowerCaseLetters)){
//         alert('please add 1 lovercase letter');

//     }else{
//         localStorage.setItem('name', name.value);
//         localStorage.setItem('pw', pw.value);
//         alert('Your account has been created');
//         window.location.href = "login.html"
//     }
// }

// //checking

function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}
