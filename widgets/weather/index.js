let key = "fd1dc7de81314fcd9c741209212107";
fetch("https://api.ipify.org/?format=json")
.then(res => res.json())
.then(data => getWeather(data.ip));

function getWeather(location) {

   console.log(location);
   fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=1&aqi=no&alerts=no`)
   .then(res => res.json())
   .then(data => parseData(data))

}

function parseData(weather) {
    console.log(weather);
    document.querySelector("#weather-type").innerHTML = weather.forecast.forecastday[0].day.condition.text;;
    document.querySelector("#weather-temp").innerHTML = weather.forecast.forecastday[0].day.avgtemp_f;
    document.querySelector("#weather-city").innerHTML = weather.location.name;
    document.querySelector("#weather-country").innerHTML = weather.location.country;

    
}

// data.forecast.forecastday[0].day.condition.text

// data.forecast.forecastday[0].day.avgtemp_f

// data.location.name

// data.location.country