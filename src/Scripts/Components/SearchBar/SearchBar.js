import React from 'react';
import Styles from './SearchBar.module.css';
import Styles1 from '../../../Styles/WeatherApp.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import SettingsButton from './Settings/SettingsButton';
// Allows users to search for a specific location.
class SearchBar extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  getBackground(){
    let hour = new Date().getHours()
    if(hour<=5){
      return "locationsContainerNight"
    }
    else if(hour<10){
      return "locationsContainerMorning"
    }
    else if(hour<17){
      return "locationsContainerAfternoon"
    }
    else if(hour<=20){
      return "locationsContainerEvening"
    }
    else{
      return "locationsContainerNight"
    }
  }

  //handles the change of address location
  handleChange = address => {
    this.setState({ address });
  };
  //gets lat and lng location from the adress suplied
  handleSelect = address => {

      geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
          document.getElementById("latSearch").innerHTML = {lat}.lat
          document.getElementById("lonSearch").innerHTML = {lng}.lng
          this.props.onEnter()
      })
      .catch(error => console.error('Error', error));

  };
  // Structure of the search bar
  render() {
    let background = this.getBackground()
    

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={Styles.SearchBar}>
            <input
              {...getInputProps({
                placeholder: 'Search Location',
                className: 'location-search-input',
              })}
            />
            <SettingsButton></SettingsButton>
            <div className={Styles[background]}>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: "#ffffff", cursor: 'pointer', }
                  : { backgroundColor: 'transparent', cursor: 'pointer', };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

    );
  }
}
export default SearchBar;
