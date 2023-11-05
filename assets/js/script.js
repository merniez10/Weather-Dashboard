var searchForm = document.getElementById("search-form");
var searchBtn = document.getElementById("search-button");

var currentContainer = document.getElementById("current");
var forecastContainer = document.getElementById("forecast-section");
var searchHistory = [];
var searchHistoryContainer = document.querySelector("search-history");
var searchInput = document.getElementById("search-input")
var apiKey = "3b7385de90546d6cb7276e90c09e92f0"

function currentWeather(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(apiUrl)
    .then(function (res) {
        return res.json();

    })
    .then(function (data) {
        console.log(data)

    })
}

function searchCity(event) {

    event.preventDefault()
    var city = searchInput.value.trim();

    console.log(city)
    currentWeather(city) 
}


searchForm.addEventListener("submit", searchCity)