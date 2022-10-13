
//create time function

function time(){

    //get components to date and time
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let dayWeek = date.getDay(); // day of week
    let day = date.getDate(); // day of month
    let month = date.getMonth()+1; //function getmonth() varies from 0 to 11, required add +1
    let year = date.getFullYear();

    //full time
    let fullTime = `${hour}:${minute}`; 

    //Add number 0 for cases where min. is less than 10
    if(minute < 10) { 
        fullTime = `${hour}:0${minute}`;
    }

    //changing value of dayWeek to correct text
    const dayWeek_text = converterDayWeek(dayWeek);

    //changing value of month to correct text
    const month_text = convertMonth(month);
  
    //full date
    let fullDate = `${dayWeek_text}, ${day} de ${month_text} de ${year}`;

    //changing content on the screen
    let content_time = window.document.querySelector('#time');
    content_time.innerHTML = fullTime; 

    let content_date = window.document.querySelector('#date');
    content_date.innerHTML = fullDate;
}

////function to convert day of week
function converterDayWeek(dw){
    if(dw==0){
        dw = 'Domingo'
    } else if(dw == 1){
        dw = 'segunda-feira'
    } else if(dw == 2){
        dw = 'terça-feira'
    } else if(dw == 3){
        dw = 'quarta-feira'
    } else if(dw == 4){
        dw = 'quinta-feira'
    } else if(dw == 5){
        dw = 'Sexta-feira'
    } else if(dw == 6){
        dw = 'sabado'
    } else if(dw == 7){
        dw = 'domingo'
    }
    return dw
}

//function to convert month
function convertMonth(month){
    if(month==1){
        month='Janeiro';
    } else if (month==2) {
        month = 'Fevereiro';
    } else if (month==3) {
        month = 'Março';
    } else if (month==4) {
        month = 'Abril';
    } else if(month==5){
        month='Maio';
    } else if (month==6) {
        month = 'Junho';
    } else if (month==7) {
        month = 'Julho';
    } else if (month==8) {
        month = 'Agosto';
    } else if(month==9){
        month='Setembro';
    } else if (month==10) {
        month = 'Outubro';
    } else if (month==11) {
        month = 'Novembro';
    } else if (month==12) {
        month = 'Dezembro';
    }
    return month
}

//call time function
setInterval(time,500);