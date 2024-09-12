
// API Keys
// const API_Key =  secrets.WEATHER_API_KEY
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// Details Dsiplay
const card = document.querySelector(".card")
const cityName = document.querySelector(".city")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const feelsLike = document.querySelector(".like")


// Search Bar
const searchBox = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search button")

// Waether Icon
const weatherIcon = document.querySelector(".weather-icon")

// Weather Background


// Weather Blocks Display
const weatherDisplay = document.querySelector(".weather")
const errorDisplay = document.querySelector(".error")


// Mouse Event Listener
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
    
    
})


// Keyboard Event Listener
searchBox.addEventListener("keypress", (e) => {
    if( e.keyCode === 13){
        checkWeather(searchBox.value)
       
    }
})


async function checkWeather(city) {
    // Fetch Data
    const response = await fetch(API_URL + `${city}` + `&appid=${WEATHER_API_KEY}`);
    let data = await response.json();
    console.log(data)


    // Check if the City Name exists
    if (response.status == 404) {

        // Set Error Display
        errorDisplay.style.display = "block"
        weatherDisplay.style.display = "none"

         searchBox.value = ""
    }

    else {

        // Set Weather Dsipaly
        weatherDisplay.style.display = "block"
        errorDisplay.style.display = "none"
        

        cityName.innerHTML = data.name

        temp.innerHTML = Math.round(data.main.temp) + "°C"
        feelsLike.innerHTML = "Feels Like " + Math.floor(data.main.feels_like) + "°C"

        humidity.innerHTML = data.main.humidity + "%"
        wind.innerHTML = data.wind.speed + " km/h"

        updateWeatherIcon(data.weather[0].main)

       searchBox.value = ""
        
    }




            
}





async function updateWeatherIcon(weather) {

    switch (weather) {
    case 'Clear':
      card.style.background = 'linear-gradient(135deg, #87CEEB, #FFFAFA)'; // Clear sky
      weatherIcon.src = "images/clear.png";
      break;
    case 'Clouds':
      card.style.background = 'linear-gradient(135deg, #B0C4DE, #A9A9A9)'; // Cloudy
      weatherIcon.src = "images/clouds.png";
      break;
    case 'Rain':
      card.style.background = 'linear-gradient(135deg, #00CED1, #4682B4)'; // Rainy
      weatherIcon.src = "images/rain.png";
      break;
    case 'Drizzle':
      card.style.background = 'linear-gradient(135deg, #FFFFFF, #ADD8E6)'; // Snowy
      weatherIcon.src = "images/drizzle.png";
      break;
    case 'Mist':
      card.style.background = 'linear-gradient(135deg, #4B0082, #000000)'; // Thunderstorm
      weatherIcon.src = "images/mist.png";
      break;
    default:
      card.style.background = 'linear-gradient(135deg, #00feba, #5b548a)'; // Default
      break;
    }
    
    
}


// if(weather == "Clouds"){
//     weatherIcon.src = "images/clouds.png";
// }
// else if (weather == "Drizzle") {
//     weatherIcon.src = "images/drizzle.png";
// }
// else if (weather == "Mist") {
//     weatherIcon.src = "images/mist.png";
// }
// else if (weather == "Clear") {
//     weatherIcon.src = "images/clear.png";
// }
// else if (weather == "Rain") {
//     weatherIcon.src = "images/rain.png";
// }
