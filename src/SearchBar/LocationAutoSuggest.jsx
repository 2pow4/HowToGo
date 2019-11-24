import React from "react";
import AutoSuggest from "react-autosuggest";
import * as Hangul from "hangul-js";
import "./locationautosuggest.css";
import cities from "./cities";
import locations from "./locations";

const isLocation = value => ( value.hasOwnProperty('locationId') ? true : false )

// suggestion logic 
const getSuggestions = value => {
  //sanitize values
  const inputValue = Hangul.disassemble(value.trim());
  const inputLen = inputValue.length;

  // TODO: enhance result search -> when city suggestion have only city get locations
  let suggestions = []
  if (inputLen > 0) {
    const suggestionCities = cities.filter(city =>
      JSON.stringify(
        Hangul.disassemble(city.cityName).slice(0, inputLen)
      ) === JSON.stringify(inputValue))

    const suggestionLocations = locations.filter(location =>
      JSON.stringify(
        Hangul.disassemble(location.locationName).slice(0, inputLen)
      ) === JSON.stringify(inputValue))
    
    if (suggestionCities.length > 1){
      suggestions = suggestionCities.concat(suggestionLocations) 
    }
    else if (suggestionCities.length == 1 ){
      const targetLocations = locations.filter(location => location.cityId == suggestionCities[0].cityId)
      suggestions = suggestionCities.concat(targetLocations)  
    }
    else {
      suggestions = suggestionLocations.length > 0 ? suggestionLocations : []
    }
  } 
  return suggestions   
};

class LocationAutoSuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }
  // AutoSuggest component callback function
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: getSuggestions(value) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.props.onValueChange(suggestion);
  };
  getSuggestionValue = value => isLocation(value) ? value.locationName : value.cityName;

  renderSuggestion = suggestions => <div>{ isLocation(suggestions) ? `${suggestions.locationName} - ${suggestions.cityName}`: suggestions.cityName}</div>;

  onChange = (_, { newValue }) => {
    this.setState({ value: newValue });
  };
  render() {
    const { id, name, className } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "도시, 터미널 및 공항",
      value,
      name: name,
      onChange: this.onChange
    };

    return (
      <div className={className}>
        <AutoSuggest
          id={id}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          highlightFirstSuggestion={true}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default LocationAutoSuggest;
