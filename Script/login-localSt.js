
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

var ss = document.getElementById("button-logout"); // button 'Logout'

//Event click - button logout
ss.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.clear(); //clear localStorage
    document.location.pathname = "../index.html"; //change to login page
});
