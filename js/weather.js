const API_KEY = "-";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const nowWeather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("weather span:last-child");

        const name = data.name;
        const weather = data.weather[0].main;
        
        city.innerText = name;
        nowWeather.innerText = weather;
    });   

}

function onGeoError() {
    alert("Can't locate you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
