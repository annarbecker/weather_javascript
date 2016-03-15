var apiKey = require('./../.env').apiKey;
var temperatureF = require('./../js/temperature.js').temperatureF;
var temperatureC = require('./../js/temperature.js').temperatureC;

$(document).ready(function() {
  $('#tempLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeatherF').empty();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeatherK').text("The temperature in " + city + " is " + response.main.temp + "°K,");
      $('.showWeatherC').text(temperatureC(response.main.temp) + "°C");
      $('.showWeatherF').append("<a id='showF'>Get Temperate in F</a>");
      $("a#showF").click(function() {
        $('.showWeatherF').text(temperatureF(response.main.temp) + "°F").show();
      });
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
