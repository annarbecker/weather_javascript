exports.temperatureF = function(temp) {
   var newTempF = ((temp - 273.15) * 1.8) + 32;
  return newTempF;
};

exports.temperatureC = function(temp) {
   var newTempC = (temp - 273.15);
  return newTempC;
};
