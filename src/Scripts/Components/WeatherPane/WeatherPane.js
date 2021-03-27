import React from 'react';
import WeatherIcon from './WeatherIcon.js'
import Styles from './WeatherPane.module.css';
import KelvinToCelsius from './KelvinToCelsius.js'
import WeatherAPI from './WeatherAPI.js'

class WeatherPane extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        image: null,
        message: "Loading",
        temperature: this.props.temp
      }
    }

    componentDidMount(){
      this.componentDidUpdate()
    }
    
    async componentDidUpdate(){
      /* let lat = 51.5241;
      let lon = -0.0404; */
      // if (document.getElementById("lat").textContent){
      //    lat = document.getElementById("lat").textContent
      //    lon = document.getElementById("lon").textContent
      //  }
      // let weatherData = await new WeatherAPI(lat,lon)
      // .fetchLocationWeatherData()
      // .then(data => {return data})

      // let weatherIcon = new WeatherIcon(weatherData.weather[0].id)
      // let tempData = KelvinToCelsius(weatherData.main.temp)

      // await this.setState({
      //   image: weatherIcon.getWeatherIcon(),
      //   message: weatherIcon.getWeatherMessage(),
      //   temperature: tempData
      // })
      if(document.getElementById("latSearch").textContent === ""){
        if(document.getElementById("lat").textContent ===""){
          let weatherData = await new WeatherAPI(51.5241,-0.0404).fetchLocationWeatherData()
          let weatherIcon = new WeatherIcon(weatherData.weather[0].id)
          let tempData = KelvinToCelsius(weatherData.main.temp)
            this.state.image= weatherIcon.getWeatherIcon()
            this.state.message= weatherIcon.getWeatherMessage()
            this.state.temperature= tempData
        }
        else{
          let weatherData = await new WeatherAPI(document.getElementById("lat").textContent,document.getElementById("lon").textContent).fetchLocationWeatherData()
          let weatherIcon = new WeatherIcon(weatherData.weather[0].id)
          let tempData = KelvinToCelsius(weatherData.main.temp)
          console.log(tempData, "here")
          this.state.image= weatherIcon.getWeatherIcon()
          this.state.message= weatherIcon.getWeatherMessage()
          this.state.temperature= tempData
        }
      }
      else{
        let weatherData = await new WeatherAPI(document.getElementById("latSearch").textContent,document.getElementById("lonSearch").textContent).fetchLocationWeatherData()
        let weatherIcon = new WeatherIcon(weatherData.weather[0].id)
        let tempData = KelvinToCelsius(weatherData.main.temp)
        console.log(tempData, "there")
        this.state.image= weatherIcon.getWeatherIcon()
        this.state.message= weatherIcon.getWeatherMessage()
        this.state.temperature= tempData
    }
  }
  

    render(){
        return (
            <div className={Styles.WeatherPane}>
              <div className={Styles.WeatherInfo}>
                <img className={Styles.Image} src={this.state.image} alt={this.state.message}/>
                <div className={Styles.Stats}>
                  <p className={Styles.Temperature}>{this.state.temperature}°C</p>
                  <p className={Styles.Description}>{this.state.message}</p>
              </div>
              </div>
            </div>
          );
    }
}

export default WeatherPane;


//<sup className={Styles.Degree}>degree Celcius</sup>