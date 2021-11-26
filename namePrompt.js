var readlineSync = require('readline-sync');
const Thermostat = require('./thermostat');
readlineSync.setDefaultOptions({limit: ['up', 'down', 'psm on', 'psm off']});

therm = new Thermostat
console.log(therm.getTemperature()) 

while (true) {  

var input = readlineSync.question("Enter Command > ");
if (input === 'up') {
    therm.up(1)
    console.log(therm.getTemperature())
} else if 
    (input === 'down') {
    therm.down(1)
    console.log(therm.getTemperature())
    }
}




