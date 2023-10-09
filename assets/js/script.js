var searchForm = document.getElementById("search-form");
var searchBtn = document.getElementById("search-button");

var currentContainer = document.getElementById("current");
var forecastContainer = document.getElementById("forecast-section");
var searchHistory = [];
var searchHistoryContainer = document.querySelector("search-history");
var searchInput = document.getElementById("search-input")
var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

function searchCity(event) {

    event.preventDefault()
    var city = searchInput.value.trim();

    console.log(city)
}


searchForm.addEventListener("submit", searchCity)