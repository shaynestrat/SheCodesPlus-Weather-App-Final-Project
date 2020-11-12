function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  let h5 = document.querySelector("h5");

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  //console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "5694f43f4dbaf07d0e041cc20cf76b31";
  let apiUrl = `"https://api.openweathermap.org/data/2.5/weather"?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  //console.log(response.main.name);
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function seachLocation(position) {
  let apiKey = "5694f43f4dbaf07d0e041cc20cf76b31";

  let apiUrl = `"https://api.openweathermap.org/data/2.5/weather"?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units}=${units}`;

  axios.get(apiUrl).then(getPosition);
}

navigator.geolocation.getCurrentPosition(displayWeatherCondition);

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
