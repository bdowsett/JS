const Weather = require('./weather')

class Thermostat {
  constructor(weather) {
    this.weather = weather
    this.temp = 20;
    this.powersaver = true;
    this.maxtemp = 25;
  }
  getTemperature() {
    return `Temperature is ${this.temp}`;
  }

  setCity(city){
    weather.fetchWeatherData(city, (weatherData) => {
       this.temp = JSON.parse(weatherData.body).name
    });

  }

  up(number) {
    if (this.temp + number > this.maxtemp) {
      //this.temp = this.temp
      return `${this.getTemperature()} (max reached)`;
    } else {
      return `Temperature is ${(this.temp += number)}`;
    }
  }

  down(number) {
    if (this.temp - number < 10) {
      this.temp = this.temp;
      return "min temp is 10 degrees";
    } else {
      return (this.temp -= number);
    }
  }

  setPowerSavingMode(boolean) {
    if (boolean == false) {
      this.maxtemp = 32;
    } else if (boolean == true) {
        
        this.maxtemp = 25;
    }
  }
  reset() {
    return (this.temp = 20);
  }
  currentEnergyUsage() {
    if (this.temp < 18) {
      return "low usage";
    } else if (this.temp <= 25) {
      return "medium-usage";
    } else {
      return "high usage";
    }
  }
}

module.exports = Thermostat;
