// Import data from classes & API's used.
import '../Styles/WeatherApp.css';
import SearchBar from './Components/SearchBar/SearchBar.js'
import HeaderBar from './Components/HeaderBar/HeaderBar.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js'
import WeatherPane from './Components/WeatherPane/WeatherPane.js'
import StatisticPane from './Components/StatisticPane/StatisticPane.js'
import ForecastPane from './Components/ForecastPane/ForecastPane.js'
import WeatherAPI from './Components/WeatherPane/WeatherAPI.js'
import React from 'react';
import Background from '../Images/LondonBigBen.png'
import Sun from '../Images/SunBackground.svg'
import Clouds1 from '../Images/Clouds.svg'
import Clouds2 from '../Images/Clouds1.svg'
import SettingsPane from './Components/SearchBar/Settings/SettingsPane';
//constructor for the weather app object
class WeatherApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      API: {
        loading: true,
        data: {
          temperature: null,
          conditions: null,
          city: null,
          town: null,
          icon: null,
        }
      }
    }
    this.getData = this.getData.bind(this)
  }
  //Gets different background based on the time of the day. (new)
  getBackground(){
    let hour = new Date().getHours()
    if(hour<=5){
      return "Main_ScreenNight"
    }
    else if(hour<10){
      return "Main_ScreenMorning"
    }
    else if(hour<17){
      return "Main_ScreenAfternoon"
    }
    else if(hour<=20){
      return "Main_ScreenEvening"
    }
    else{
      return "Main_ScreenNight"
    }
  }
  // componentDidUpdate() <--- calling it this will fix the location error but ask many requests.
  
  async componentDidMount(){
    this.setState({
      background: this.getBackground()
    })
    this.getData()
  }
  
  async getData(){
    if(document.getElementById("latSearch").textContent === ""){
      if(document.getElementById("lat").textContent ===""){
        const result = await new WeatherAPI(51.5241,-0.0404).fetchLocationData()
        this.setState({
          API: {
            loading: false,
            data: {
              city: result.results[0].address_components[1].long_name,
              town: result.results[0].address_components[2].long_name
            }
          }
        })
      }
      else{
        const result = await new WeatherAPI(document.getElementById("lat").textContent,document.getElementById("lon").textContent).fetchLocationData()
        this.setState({
          API: {
            loading: false,
            data: {
              city: result.results[0].address_components[1].long_name,
              town: result.results[0].address_components[2].long_name
            }
            
          }
        })
        console.log("app here")
        const weatherResult = await new WeatherAPI(document.getElementById("lat").textContent,document.getElementById("lon").textContent).fetchLocationWeatherData()
        this.setState({
          API: {
            data: {
              temperature: weatherResult.main.temp,
              city: result.results[0].address_components[1].long_name,
              town: result.results[0].address_components[2].long_name
            }
          }
        })
      }
    }
    else{
      const result = await new WeatherAPI(document.getElementById("latSearch").textContent,document.getElementById("lonSearch").textContent).fetchLocationData()
      this.setState({
      API: {
        loading: false,
        data: {
          city: result.results[0].address_components[1].long_name,
          town: result.results[0].address_components[2].long_name
        }
      }
    })
    console.log("app there")
    const weatherResult = await new WeatherAPI(document.getElementById("latSearch").textContent,document.getElementById("lonSearch").textContent).fetchLocationWeatherData()
        this.setState({
          API: {
            data: {
              temperature: weatherResult.main.temp,
              city: result.results[0].address_components[1].long_name,
          town: result.results[0].address_components[2].long_name
            }
          }
        })

    document.getElementById("latSearch").textContent = ""
    document.getElementById("lonSearch").textContent = ""
    document.getElementById("latSearch").hidden = true
    document.getElementById("lonSearch").hidden = true
    }
  }

  /*
  <div className="Background">
        <img src={Background}></img>
      </div>
  */
  
  render(){
    const path = this.state.API.data;

    navigator.geolocation.getCurrentPosition(function(position){
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        document.getElementById("lat").innerHTML = lat
        document.getElementById("lon").innerHTML = lon
        document.getElementById("lat").hidden = true
        document.getElementById("lon").hidden = true
    })
    // Structure of the weather application in HTML along with React, JS & CSS (external)
    return(
      <div className="ParentDiv">
        <div className="BackgroundContainer">
          <div className="Background">
            <img className="BackgroundImage" height={window.innerHeight} width={window.innerWidth} src={Background} alt="Background"></img>
        </div>
      </div>
      <div className={this.getBackground()}>
      <img className="Clouds1" src={Clouds1} alt="Cloud1"></img>
      <img className="Clouds2" src={Clouds2} alt="Cloud2"></img>
      <img className="Clouds3" src={Clouds1} alt="Cloud3"></img>
      <img className="BackgroundSun" src={Sun} alt="Sun"></img>
        <SearchBar onEnter={this.getData}></SearchBar>
        <HeaderBar city={path.city} town={path.town}></HeaderBar>
        <NavigationBar></NavigationBar>
        <WeatherPane temp={this.state.API.data.temperature}></WeatherPane>
        <StatisticPane></StatisticPane>
        <ForecastPane click={this.getData}></ForecastPane>
        <hr></hr>
        <button className="GPSButton" onClick={this.getData}></button>
        <SettingsPane></SettingsPane>
      </div>
      </div>
    );
  }
}

export default WeatherApp;

/*
<img className="BackgroundSun" src={Sun} alt="Sun"></img>
*/