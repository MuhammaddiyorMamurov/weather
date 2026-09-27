const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const error  = document.querySelector('.error')

const apiKey = "1ea3daec6462a7ad732fa3332eb19785";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(citym) {
  const response = await fetch(apiUrl + citym + `&appid=${apiKey}`);

  if(response.status==404){
    error.style.display = "block"
    document.querySelector(".weather").style.display = "none";
  }else{
      let data = await response.json();

      city.textContent = data.name;
      temp.textContent = Math.round(data.main.temp) + "°c";
      humidity.textContent = data.main.humidity + "%";
      wind.textContent = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
      }

      document.querySelector(".weather").style.display = "block";
      error.style.display = "none"
  }



}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});
