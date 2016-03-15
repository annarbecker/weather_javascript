exports.temperature = function(temp) {
   var newTemp = ((temp - 273.15) * 1.8) + 32;
  return newTemp;
};
