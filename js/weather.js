const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';
const COORDS = 'coords';
const txt = document.querySelector('.weather');


function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
        .then((response) => response.json())
        .then((json) => {
            const temp = json.main.temp;
            const city = json.name;
            txt.innerHTML = `<div><i class="fas fa-map-marker-alt"></i> ${city}</div>
            <div>${temp} °C</div>`
        });
}

function saveCoords(coordsObj){
localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSuccess(position){
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const coordsObj = {
latitude: latitude,
longitude: longitude,
};
saveCoords(coordsObj);
getWeather(latitude, longitude);
}

function handleGeoError(){
console.log("Cant access geo location");
}

function askForCoords(){
navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
const loadedCoords = localStorage.getItem(COORDS);
if(loadedCoords === null){
    askForCoords();
} else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
}
}

function init(){
loadCoords();

}

init();