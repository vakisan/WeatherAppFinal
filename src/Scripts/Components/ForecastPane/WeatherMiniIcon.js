import CloudySunny from '../../../Images/CloudySunnyMini.svg'
import CloudyNight from '../../../Images/CloudyNightMini.svg'
import Night from '../../../Images/CloudyNightMini.svg'
import Rain from '../../../Images/RainMini.svg'
import Sunny from '../../../Images/CloudySunnyMini.svg'
import ThunderStorm from '../../../Images/ThunderStormMini.svg'
import NightRain from '../../../Images/CloudyNightRainMini.svg'

class WeatherMiniIcon{
    // Constructor which displays the diffrent weather icon based on the weather conditions.
    constructor(weatherCondition,hour){
        this.weather = {
            CLOUDYSUNNY: {
                Value: 0,
                Icon: CloudySunny,
                Message: "Partly Cloudy",
                Code: [802,803,804]
            },
            SUNNY: {
                Value: 1,
                Icon: Sunny,
                Message: "Sunny",
                Code: [800,801]
            },
            RAIN: {
                Value: 2,
                Icon: Rain,
                Message: "Rainy",
                Code: [500,501,502,503,504,511,520,521,522,531]
            },
            THUNDERSTORM: {
                Value: 3,
                Icon: ThunderStorm,
                Message: "Thunderstorm",
                Code: [200,201,202,210,211,212,221,230,231,232]
            },
            NIGHT: {
                Value: 4,
                Icon: Night,
                Message: "Night",
                Code: [100,101]
                
            },
            CLOUDYNIGHT: {
                Value: 5,
                Icon: CloudyNight,
                Message: "Cloudy Night",
                Code: [805]
            },
            NIGHTRAIN: {
                Value: 5,
                Icon: NightRain,
                Message: "Rainy Night",
                Code: [806]
            }
        }
        this.img = null; // Icon Image
        this.msg = null; // Weather Icon description
        for (let property in this.weather) {
            if (this.weather[property].Code.includes(weatherCondition)){
                this.img = this.weather[property].Icon
                this.msg = this.weather[property].Message
                // Conditions - Based on the time & weather condition display these specific icon images + description.
                if(hour>20 || hour<6){
                    if([802,803,804].includes(weatherCondition)){
                        this.img = this.weather.CLOUDYNIGHT.Icon
                        this.msg = this.weather.CLOUDYNIGHT.Message
                    }
                    else if(this.weather.RAIN.Code.includes(weatherCondition)){
                        this.img = this.weather.NIGHTRAIN.Icon
                        this.msg = this.weather.NIGHTRAIN.Message
                    }
                    else{
                        this.img = this.weather.NIGHT.Icon
                        this.msg = this.weather.NIGHT.Message
                    }
                }
            }
        }
    }

    //get methods for parts of weatherMiniIcon
    getWeatherIcon(){
        return this.img
    }

    getWeatherMessage(){
        return this.msg
    }

    getWeatherCode(){
        return this.code
    }
}

export default WeatherMiniIcon