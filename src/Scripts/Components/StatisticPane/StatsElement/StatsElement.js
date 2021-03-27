import React from 'react';
import Styles from './StatsElement.module.css';

class StatsElement extends React.Component{
    
    render(){
        return (
            <div className={Styles.StatsElement}>
                    <p className={Styles.Title}>{this.props.stats_name}</p>
                    <p className={Styles.Description}><img src={this.props.icon} img="Description" alt="Description"/>{this.props.description}</p>
            </div>
          );
    }
}

export default StatsElement;
