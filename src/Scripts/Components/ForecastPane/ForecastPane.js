import React from 'react';
import Styles from './ForecastPane.module.css';
import HourlyForecast from './HourlyForecat.js'

class ForecastPane extends React.Component{
    // Display the hourly forecast to the user.
    render(){
        return (
            <div className={Styles.ForecastPane}>
              <HourlyForecast></HourlyForecast>
            </div>
          );
    }
}
//<button className={Styles.GPSButton} onClick={this.getData}></button>

export default ForecastPane;
