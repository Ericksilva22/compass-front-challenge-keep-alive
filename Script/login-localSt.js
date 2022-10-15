
// Save LocalStorage
function saveLocal(a,b){

    const components = {
        user : a,
        password : b
    }

    localStorage.setItem("item", JSON.stringify(components));
}

// clear Inputs
function clearInputs(a,b){
    a = '';
    b = '';
}

//remove LocalStorage

var btn_logout = document.getElementById("button-logout"); // button 'Logout'

//Event click - button logout
btn_logout.addEventListener("click", function(e){

    e.preventDefault();
    
    var answer_logout = confirm("Deseja realmente realizar logout?");//get answer
    if(answer_logout){
        localStorage.clear(); //clear localStorage
        document.location.pathname = "../index.html"; //change to login page
    }
    
});
