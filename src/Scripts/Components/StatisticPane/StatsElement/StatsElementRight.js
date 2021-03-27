import React from 'react';
import Styles from './StatsElement.module.css';

class StatsElementRight extends React.Component{
    
    render(){
        return (
            <div className={Styles.StatsElementRight}>
                    <div className={Styles.Row}>
                    <p className={Styles.Title}>{this.props.stats_name}</p>
                    <p className={Styles.Description}>{this.props.description}</p>
                    </div>
                    <img className={Styles.Image} src={this.props.icon} alt="Stats Right"/>
            </div>
          );
    }
}

export default StatsElementRight;
