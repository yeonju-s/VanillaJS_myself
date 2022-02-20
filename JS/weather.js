const API_KEY = "c4c0ee55ce46a089e173bfd2ee2b516d";

function onGeoSuccess(position){
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}˚C, ${data.weather[0].main}`;
    })
}

function onGeoWrong(){
    alert("I can't find you, and there's no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoWrong);