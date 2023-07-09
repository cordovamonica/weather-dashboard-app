var apiKey = 'f83960141d0a51fff4ffcd494b341507';
var lat = '29.42';
var lon = '98.49';

var searchEl = $('#search-input');
var searchBtn = $('#search-btn');
var searchHistoryEl = $('#history-list');
var currentWeatherEl = $('.current-weather');
var forecastEl = $('.forecast-cards');

let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';

// Get current weather and forecast
function getWeather() {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    }

    searchBtn.on('click', function () {
        var searchInput = searchEl.val();
        console.log(searchInput);
        getWeather();
    }
    )

