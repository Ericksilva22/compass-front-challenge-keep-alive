
var seconds = 600;
var a = 1;

function refresh (){

    if(seconds > 0) {

        seconds = seconds - a;
        let content_seconds = window.document.querySelector('.counter-content-number');
        content_seconds.innerHTML = seconds; //show counter on screen

    } else if(seconds==0){ // counter = 0
                
       var answer = confirm("Deseja permanecer conectado?");//get answer

       if(answer === true){
            location.reload(answer); //reload home page
       } else {
            localStorage.clear(); //clear localStorage
            document.location.pathname = "../index.html"; //Logout
       }
    }
}

//call function every second
setInterval(refresh,1000);

    
