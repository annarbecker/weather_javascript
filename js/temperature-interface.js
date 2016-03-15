var apiKey = require('./../.env').apiKey;
var temperature = require('./../js/temperature.js').temperature;

$(document).ready(function() {
  $('#tempLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + city + " is " + temperature(response.main.temp) + "°F.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
