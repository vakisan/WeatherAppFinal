import React from 'react';
import Styles from './ForecastPane.module.css';
import WeatherAPI from '../WeatherPane/WeatherAPI'
import KelvinToCelsius from '../WeatherPane/KelvinToCelsius.js'
import Thermometer from '../../../Images/Thermometer.svg'
import Drop from '../../../Images/Drop.svg'
import WeatherMiniIcon from './WeatherMiniIcon.js'

class HourlyForecast extends React.Component{
   // Constructor for Hourly Forecast 
    constructor(props){
        super(props)
        this.state = {
            icon: null
        }
    }

    // async componentDidMount(){
    //     let result = await new WeatherAPI(51.5241, -0.0404)
    //         .fetchHourlyData()
    //         .then(res => {return res})
    //     if(document.getElementById("latSearch").textContent !== ""){
    //         result = await new WeatherAPI(document.getElementById("lat").innerHTML, document.getElementById("lon").innerHTML)
    //         .fetchHourlyData()
    //         .then(res => {return res})
    //     }
    //     else if (document.getElementById("lat").textContent == ""){
    //         console.log(5)
    //         result = await new WeatherAPI(document.getElementById("lat").innerHTML, document.getElementById("lon").innerHTML)
    //         .fetchHourlyData()
    //         .then(res => {return res})
    //     }

    //     for (let i = 1; i<25; i++){
    //         let e = document.getElementsByClassName(Styles.HourColumn+""+i)
    //         e[0].parentNode.childNodes[2].childNodes[0].src = this.getIconMini(result.hourly[i].weather[0].id, e[0].parentNode.childNodes[0].textContent.substring(0,2))
    //         e[0].parentNode.childNodes[3].append(Math.round(KelvinToCelsius(result.hourly[i].temp)) + "°C")
    //         e[0].parentNode.childNodes[4].append(result.hourly[i].humidity + "%")
    //     }
    // }
    
    // Retrieve LAT location.
    async componentDidUpdate(){
        let result;
        if(document.getElementById("latSearch").textContent === ""){
          if(document.getElementById("lat").textContent ===""){
            result = await new WeatherAPI(51.5241,-0.0404).fetchHourlyData()
          }
          else{
            result = await new WeatherAPI(document.getElementById("lat").textContent,document.getElementById("lon").textContent).fetchHourlyData()
          }
        }
        else{
          result = await new WeatherAPI(document.getElementById("latSearch").textContent,document.getElementById("lonSearch").textContent).fetchHourlyData()
        }
        //fills out the hourly forecast tab(time,temperature,humidity)
        for (let i = 1; i<25; i++){
            let e = document.getElementsByClassName(Styles.HourColumn+""+i)
            e[0].parentNode.childNodes[2].childNodes[0].src = this.getIconMini(result.hourly[i].weather[0].id, e[0].parentNode.childNodes[0].textContent.substring(0,2))
            e[0].parentNode.childNodes[3].textContent = Math.round(KelvinToCelsius(result.hourly[i].temp)) + "°C"
            e[0].parentNode.childNodes[4].textContent = result.hourly[i].humidity + "%"
      }
    }
    //gets the icon associated with the current weather
    getIconMini(condition,hour){
        return new WeatherMiniIcon(condition,hour).getWeatherIcon()
    }
    
      
    // Formats the time stamp
    render(){
        let hour = new Date().getHours()
        let elementArray = [];
        let over24 = 0;
        for(let i = 1; i<25; i++){
            let formatter;
            if (i+hour<24){
                if (i+hour<10){
                    formatter = "0" + (i+hour)+ ':00'
                }
                else{
                    formatter = (i+hour) + ':00'
                }
            }
            else{
                if (over24<10){
                    formatter = "0" + over24+ ':00'
                }
                else{
                    formatter = over24+ ':00'
                }
                over24 += 1
            }
            elementArray.push(
                <div className="columnBox" key={i}>
                  <p className={Styles.HourColumn+""+i}  style={
                    {
                      gridColumn:i,
                      width: 150
                    }
                  }>
                  {formatter}
                  </p>
                  <hr className={Styles.Line}/>
                  <p><img className={Styles.icons} alt="weather_icon"/></p>
                  <p><img src={Thermometer} alt="thermometer"/></p>
                  <p><img className={Styles.Drop} src={Drop} alt="drop"/></p>
                </div>
            );
          }
        return (
            elementArray
          );
    }
}

export default HourlyForecast;
