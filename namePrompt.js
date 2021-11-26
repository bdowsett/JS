var readlineSync = require("readline-sync");
const Thermostat = require("./thermostat");
readlineSync.setDefaultOptions({ limit: ["up", "down", "psm on", "psm off"] });

therm = new Thermostat();
console.log(therm.getTemperature());

while (true) {
  var input = readlineSync.question("Enter Command > ");
  //if (therm.temp === therm.maxtemp){
  //console.log(`${therm.getTemperature()} (Maximum reached)`)
  // }

  if (input === "up") {
    console.log(therm.up(1));
  } else if (input === "down") {
    therm.down(1);
    console.log(therm.getTemperature());
  } else if (input === "psm on") {
    therm.setPowerSavingMode(true);
  } else if (input === "psm off") {
    therm.setPowerSavingMode(false);
  }
}
