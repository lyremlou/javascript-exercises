const convertToCelsius = function(num) {
  let celcius = (num - 32) * 5/9;
   let ans = Math.round(celcius * 10) / 10;
   return ans;
 };
 
 const convertToFahrenheit = function(num) {
   let fahrenheit = (num * 9/5 + 32);
   let ans = Math.round(fahrenheit * 10) / 10;
   return ans;
 };
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
