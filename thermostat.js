class Thermostat {
    constructor(){
        this.temp = 20
        this.powersaver = true
        this.maxtemp = 25
        

    }
getTemperature() {
   return `Temperature is ${this.temp}`
}    

up(number){
   if (this.temp + number > this.maxtemp)
   { this.temp = this.temp
    return "max reached"}
   else
   {return this.temp += number}
}

down(number){
    if (this.temp - number < 10 ) {
        this.temp = this.temp
        return "min temp is 10 degrees"
    }else{
        return this.temp -= number}
}

setPowerSavingMode(boolean){
    if (boolean == false){
        this.maxtemp = 32
    }else if (boolean == true){
        this.maxtemp = 25
    }

}

reset(){
    return this.temp = 20

}

currentEnergyUsage(){
   if (this.temp < 18) {
       return "low usage"
   }else if (this.temp <= 25){
       return "medium-usage"
   }else {return "high usage"}

}

}


module.exports = Thermostat;