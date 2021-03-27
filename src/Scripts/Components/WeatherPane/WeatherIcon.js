import CloudySunny from '../../../Images/CloudySunny.svg'
import CloudyNight from '../../../Images/CloudyNight.svg'
import Night from '../../../Images/CloudyNight.svg'
import Rain from '../../../Images/Rain.svg'
import Sunny from '../../../Images/CloudySunny.svg'
import ThunderStorm from '../../../Images/ThunderStorm.svg'
import NightRain from '../../../Images/CloudyNightRain.svg'

class WeatherIcon{

    constructor(weatherCondition){
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
        this.img = null;
        this.msg = null;
        let hour = new Date().getHours()
        for (let property in this.weather) {
            if (this.weather[property].Code.includes(weatherCondition)){
                this.img = this.weather[property].Icon
                this.msg = this.weather[property].Message
                if(hour>20 || hour<6){
                    console.log(hour)
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

export default WeatherIcon