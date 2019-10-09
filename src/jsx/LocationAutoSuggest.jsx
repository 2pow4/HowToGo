import React from 'react';
import AutoSuggest from 'react-autosuggest';
import * as Hangul from 'hangul-js';
import '../css/LocationAutoSuggest.css';

const cities = [
  {
    cityId: 0,
    cityName: '서울'
  }, {
    cityId: 1,
    cityName: '서산'
  }, {
    cityId: 2,
    cityName: '부산'
  }, {
    cityId: 3,
    cityName: '부천'
  }
];

const getSuggestions = (value) => {
  //sanitize values
  const inputValue = Hangul.disassemble(value.trim());
  const inputLen = inputValue.length

  // TODO: enhance result search -> when city suggestion have only city get locations
  return inputLen === 0
    ? []
    : cities.filter(city => JSON.stringify(Hangul.disassemble(city.cityName).slice(0, inputLen)) === JSON.stringify(inputValue));
}

class LocationAutoSuggest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      suggestions: []
    }
  }
  // AutoSuggest component callback function
  onSuggestionsFetchRequested = ({value}) => {
    this.setState({suggestions: getSuggestions(value)})
  };

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []});
  };

  onSuggestionSelected = (event, {suggestion}) => {
    this.props.onValueChange(suggestion)
  }
  getSuggestionValue = value => value.cityName;

  renderSuggestion = suggestions => (
    <div>
      {suggestions.cityName}
    </div>
  );

  onChange = (_, {newValue}) => {
    this.setState({value: newValue});
  };
  render() {
    const {id, name, className} = this.props;
    const {value, suggestions} = this.state;
    const inputProps = {
      placeholder: '도시, 터미널 및 공항',
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
          inputProps={inputProps}/>
      </div>
    );
  }

}

export default LocationAutoSuggest;