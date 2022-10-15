
var button_login = document.querySelector("#button-login"); // button 'continuar'
var paragraph_error = document.querySelector("#paragraph-error"); 

button_login.addEventListener("click", function(e){
    
    e.preventDefault();

    const contentUser = form_user.value;
    const contentPassword =  form_password.value;

    if(contentUser != "admin" || contentPassword != "admin"){ // check inputs
        paragraph_error.classList.remove("display-none"); // display error paragraph
        form_user.classList.add("form-input-color-erro"); // add yellow border
        form_password.classList.add("form-input-color-erro");  // add yellow border
    } else {
        paragraph_error.classList.add("display-none"); // remove error paragraph from screen
        form_user.classList.remove("form-input-color-erro"); // remove yellow border
        form_password.classList.remove("form-input-color-erro"); // remove yellow border
    }

    // call function saveLocalStorage
    saveLocal(contentUser, contentPassword);

    //connecting home page
    if(contentUser === "admin" && contentPassword === "admin"){ // check inputs
        document.location.pathname = "./pages/home.html"; //change to home page
    }

    clearInputs(contentUser, contentPassword); //clear inputs
});