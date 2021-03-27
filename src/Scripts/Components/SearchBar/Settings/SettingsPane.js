import React from "react";
import Styles from "./SettingsPane.Module.css"
import StylesTemp from '../../WeatherPane/WeatherPane.module.css';

class SettingsPane extends React.Component{
    //constructor for settings pane
    constructor(props){
        super(props)
        this.state = {
            celsius: 1,
            fahrenheit: 0,
            temperature: {
                temp: null,
                symbol: null
            }
        }
        this.switchCelsius = this.switchCelsius.bind(this)
        this.switchFahrenheit = this.switchFahrenheit.bind(this)
    }
    // When the user closes the settings panel, hide the panel.
    closePopUp(){
        let element = document.getElementsByClassName(Styles.BackPanel)[0]
        element.className = Styles.HideBackPanel
    }
    
    componentDidUpdate(){
    }
    // Users may want to switch to celsius tempreture readings.
    switchCelsius(){
        let element = document.getElementsByClassName(StylesTemp.Temperature)[0];
        if(this.state.celsius === 1){
            // do nothing
        }
        else{
            this.state.temperature.temp = Math.round((parseInt(element.innerText.replace("°F")) - 32) *5/9)
            this.setState({
                temperature:{
                    temp: this.state.temperature.temp,
                    symbol: "°C"
                },
                celsius: 1,
                fahrenheit: 0
            })
            element.innerText = this.state.temperature.temp + "°C"
            console.log(this.state.temperature.temp)
        }

    }
    //allows users to switch to Fahrenheit temperature readings
    switchFahrenheit(){
        let element = document.getElementsByClassName(StylesTemp.Temperature)[0]
        console.log(element.innerText)
        if(this.state.fahrenheit === 1){
            // do nothing
        }
        else{
            this.state.temperature.temp = Math.round((parseInt(element.innerText.replace("°C")) * 9/5) + 32)
            this.setState({
                temperature:{
                    temp: this.state.temperature.temp,
                    symbol: "°F"
                },
                celsius: 0,
                fahrenheit: 1
            })
            element.innerText = this.state.temperature.temp + "°F"
            console.log(this.state.temperature.temp)
        }
        
    }
    // Structure of the settings panel.
    // Arrow is used to exit out of the settings.
    // Radio button is used to switch the tempreture readings.
    render(){
        return(
            <div className={Styles.HideBackPanel}>
                <div className={Styles.SettingsPane}>
                    <h1 className={Styles.Header}><p onClick={this.closePopUp} className={Styles.Arrow}>&#8617;</p>Settings</h1>
                    <hr></hr>
                    <p className={Styles.SettingHeadings}>Temperature Units</p>
                    <p><input type="radio" name="TempType" defaultChecked onClick={this.switchCelsius}></input> Celsius </p>
                    <p><input type="radio" name="TempType" onClick={this.switchFahrenheit}></input> Fahrenheit</p>
                    {/* <p className={Styles.SettingHeadings}>Default Location</p>
                    <p>Current Location: London</p> */}
                    <br></br>
                </div>
            </div>
        )
    }

}

export default SettingsPane;