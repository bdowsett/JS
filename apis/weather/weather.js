const Thermostat = require('./thermostat')


class Weather {

fetchWeatherData(city, callback){
  const got = require('got');
  const apiKey = 
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  city = city;


  got(apiUrl).then((response) => {
  callback(response)
});

}

}

module.exports = Weather;
