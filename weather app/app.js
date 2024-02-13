const apiKey = "f4384126a242d7d9062366732cc8d8c2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=germany";

const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherIcons = document.querySelector("#weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `@appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "weather";
  } else {
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

    if (data.weather[0].main == "clouds") {
      weatherIcons.src = "images/clouds.png";
    } else if (data.weather[0].main == "clear") {
      weatherIcons.src = "images/clear.png";
    } else if (data.weather[0].main == "rain") {
      weatherIcons.src = "images/rain.png";
    } else if (data.weather[0].main == "drizzle") {
      weatherIcons.src = "images/drizzle.png";
    } else if (data.weather[0].main == "mist") {
      weatherIcons.src = "images/mist.png";
    }
  }
}

searchBtn.addEventListener("click", async () => {
  checkWeather(searchBox.value);
});
