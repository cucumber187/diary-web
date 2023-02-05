const API_KEY = "bcd579d7e1c6017938ed28c885c0d647";

function getLocation(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const location = data.name;
            const weather = data.weather[0].main;
            const temp = Math.round(data.main.temp - 273.15);

            const docLocatin = document.querySelector(".weather__location");
            const docWeather = document.querySelector(".weather__weather");
            const docTemp = document.querySelector(".weather__temp");
            const docdd = document.querySelector(".date");

            docLocatin.innerText = location;
            docWeather.innerText = weather;
            docTemp.innerText = `${temp}°C`;
        })
}

function error(){
    alert("I don't know your location");
}

navigator.geolocation.getCurrentPosition(getLocation, error);
