var weather_place = document.querySelector(".header__weather-place");
var weather_celsius = document.querySelector(".header__weather-celsius");
var img__weather = document.querySelector(".header__weather-img");

//using OpenWeather API

//https://www.youtube.com/watch?v=PbwJfG2u4zI&t=1241s - reference video

//create object
const api = {
    key: "2f6d96ba9b024fa78cc0108b97069651", // My key in OpenWeather
    base: "https://api.openweathermap.org/data/2.5/", //data base
    lang: "pt_br", //language portuguese
    units: "metric" // get temperature in degrees celsius
}

// use geolocation
window.addEventListener('load', () => {
    if (navigator.geolocation) { //get current location
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        alert('I am sorry, but geolocation services are not supported!'); //browser does not support
    }
    function setPosition(position) { //set geographic coordinates
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        searchResults(lat, long);
    }
    function showError(error) {
        alert(`erro: ${error.message}`);
    }
})

//get results from latitude and longitude
function searchResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json(); //return function in json format
        })
        .catch(error => {
            alert(error.message) //show wrong request
        })
        .then(response => {
            displayResults(response)
        });
}

//show results on screen
function displayResults(weather) {

    weather_place.innerHTML = `${weather.name} - ${weather.sys.country}`; //modifying location on screen

    let iconSelected = weather.weather[0].icon;
    img__weather.setAttribute("src", `../img/weather-icons/${iconSelected}.png`); //modifying weather icon on screen
    
    let temp_celsius = `${Math.round(weather.main.temp)}`
    weather_celsius.innerText = temp_celsius + "°"; //modifying temperature on screen
}