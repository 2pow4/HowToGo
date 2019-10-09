import React from 'react';
import Calendar from 'react-calendar';
import LocationAutoSuggest from './LocationAutoSuggest';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Calendar state
      date: new Date()
    }
  }

  handleSubmit = (event) => {
    console.log("submit!")
  }
  // Calendar component callback function
  onDateChange = date => this.setState({date});

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          {/* departure destination part */}
          <LocationAutoSuggest name='departure' id='departure'/> 
          {errors.departure.length > 0 && <span className='error'>{errors.departure}</span>}
          <LocationAutoSuggest name='destination' id='destination'/> 
          {errors.departure.length > 0 && <span className='error'>{errors.destination}</span>}
          <div>
            <button>
              날짜
            </button>
            {/* date part */}
            <Calendar onChange={this.onDateChange} value={this.state.date}/>
          </div>
          <div>
            <button>
              증가
            </button>
            <input type="text"/>
            <button>감소</button>
          </div>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;