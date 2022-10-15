
//User

var form_user = document.querySelector("#form-login");
var img_user = document.querySelector("#form-user-img");


form_user.addEventListener("input", function(){
    
    if (form_user.value.length> 0){
        img_user.classList.add("user-img-position-in"); //add animation - user icon
        
    } else {
        img_user.classList.remove("user-img-position-in"); // user icon returns to its original position
        
    }
});


//Password

var form_password = document.querySelector("#password");
var img_password = document.querySelector("#form-password-img");


form_password.addEventListener("input", function(){
    
    if (form_password.value.length> 0){
        img_password.classList.add("password-img-position-in"); //add animation - password icon

    } else {
        img_password.classList.remove("password-img-position-in"); // password icon returns to its original position
    }
});