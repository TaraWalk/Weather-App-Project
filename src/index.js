function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currentTemp");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#currentCity");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
function searchEvent(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "62fb8e28a4eab4a583ea42bf3ofat058";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

let day = days[now.getDay()];
let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function submitCountry(event) {
  event.preventDefault();
  let country = document.querySelector("#search-input");
  let city = document.querySelector("#currentCity");
  city.innerHTML = country.value;
}
let clickMe = document.querySelector("#submit-input");
clickMe.addEventListener("submit", searchEvent);
