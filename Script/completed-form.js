var form_user = document.querySelector("#form-login");
var img_user = document.querySelector("#form-user-img");

form_user.addEventListener("input", function(){
    
    if (form_user.value.length> 0){
        img_user.classList.add("visibility-hidden"); //hidden user icon
        form_user.classList.add("completed-form-user"); // adding icon inside the user input
    } else {
        img_user.classList.remove("visibility-hidden"); // remove hidden user icon
        form_user.classList.remove("completed-form-user"); // removing icon inside the user input
    }
});


var form_password = document.querySelector("#password");
var img_password = document.querySelector("#form-password-img");


form_password.addEventListener("input", function(){
    
    if (form_password.value.length> 0){
        img_password.classList.add("visibility-hidden"); //hidden user icon
        form_password.classList.add("completed-form-password"); // adding icon inside the user input
    } else {
        img_password.classList.remove("visibility-hidden"); // remove hidden user icon
        form_password.classList.remove("completed-form-password"); // removing icon inside the user input
    }
});