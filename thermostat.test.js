const Thermostat = require('./thermostat');

describe('thermostat returns temp', () => {
    let thermostat = new Thermostat
    it('returns temp', () => {
     expect(thermostat.getTemperature()).toEqual(20)
     
    })
 });

 describe('thermostat can be turned up', () => {
    let thermostat = new Thermostat
    it('increases the temp', () => {
     expect(thermostat.up(5)).toEqual(25)
     
    })
 });

 describe('thermostat can be turned down', () => {
    let thermostat = new Thermostat
    it('decreases the temp to a limit of 10', () => {
     expect(thermostat.down(11)).toBe("min temp is 10 degrees")
     
    })
 });

 describe('thermostat can be turned down', () => {
    let thermostat = new Thermostat
    it('decreases the temp by value given', () => {
     expect(thermostat.down(5)).toBe(15)
     
    })
 });

 describe('thermostat can switch powersaving mode on', () => {
    let thermostat = new Thermostat
    thermostat.setPowerSavingMode(true)
    it('sets maxtemp to 25', () => {
     expect(thermostat.maxtemp).toBe(25)
     
    })
 });

 describe('thermostat can switch powersaving mode off', () => {
    let thermostat = new Thermostat
    thermostat.setPowerSavingMode(false)
    it('sets maxtemp to 32', () => {
     expect(thermostat.maxtemp).toBe(32)
     
    })
 });

 describe('thermostat reset', () => {
    let thermostat = new Thermostat
    thermostat.reset
    it('resets the temp to 20', () => {
     expect(thermostat.temp).toBe(20)
     
    })
 });


 describe('thermostat return medium energy usage', () => {
    let thermostat = new Thermostat
    it('shows energy usage', () => {
     expect(thermostat.currentEnergyUsage()).toBe("medium-usage")
     
    })
 });

 describe('thermostat returns high energy usage', () => {
    let thermostat = new Thermostat
    thermostat.up(6)
    it('shows energy usage', () => {
     expect(thermostat.currentEnergyUsage()).toBe("high usage")
     
    })
 });

 describe('thermostat returns low energy usage', () => {
    let thermostat = new Thermostat
    thermostat.down(3)
    it('shows energy usage', () => {
     expect(thermostat.currentEnergyUsage()).toBe("low usage")
     
    })
 });