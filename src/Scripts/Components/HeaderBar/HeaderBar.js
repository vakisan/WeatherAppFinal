import React from 'react';
import Styles from './HeaderBar.module.css';

class HeaderBar extends React.Component{
  //constructor for the header bar
  constructor(props){
    super(props)
    this.state = {
      city: this.props.city,
      town: this.props.town
    }
  }
  // Retrieve the days in a week & the month within a year.
  getDate(){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let d = new Date();
    let dateString = `${days[d.getDay()]} ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`
    return dateString
  }
  
  // componentWillReceiveProps(){
  //     this.state.city =  this.props.city;
  //     this.state.town = this.props.town;
  // }

  componentDidMount(){
    this.componentWillReceiveProps()
  }
  
  componentWillReceiveProps(){
    this.setState({
      city: this.props.city,
      town: this.props.town,
    })
  }

  //formats the header bar
  // Display the date, city & location
  render(){
      return (
        <div className={Styles.HeaderBar}>
          <p className={Styles.Date}>{this.getDate()}</p>
          <p className={Styles.Location}>{this.props.city}</p>
          <p className={Styles.SpLocation}>{this.props.town}</p>
          <hr className={Styles.Line}></hr>
        </div>
       );
    }
}

export default HeaderBar;
