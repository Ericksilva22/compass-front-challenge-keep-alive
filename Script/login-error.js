
var button_login = document.querySelector("#button-login"); // button 'continuar'
var paragraph_error = document.querySelector("#paragraph-error"); 

button_login.addEventListener("click", function(e){
    
    e.preventDefault();

    const contentUser = form_user.value;
    const contentPassword =  form_password.value;

    if(contentUser != "admin" && contentPassword != "admin"){ // check inputs
        paragraph_error.classList.remove("display-none"); // display paragraph
    } else {
        paragraph_error.classList.add("display-none"); // remove paragraph from screen
    }
});