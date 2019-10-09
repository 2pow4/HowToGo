import React from 'react';
import Calendar from 'react-calendar';
import LocationAutoSuggest from './LocationAutoSuggest';
import '../css/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Calendar state
      date: new Date(),
      calendarAvailable: false,
      numOfPassengers: 1,
      errors: {
          destination: ``,
          departure: ``
      }
    }
  }

  // Submit form data
  handleSubmit = event => {
    console.log(event.target);

    event.preventDefault();
    
    // switch (name) {
    //   case 'destination':
    //     errors.destination = value.length == 0
    //       ? '도착지를 입력하세요.'
    //       : '';
    //     break;

    //   case 'departure':
    //     errors.departure = value.length == 0
    //       ? '출발지를 입력하세요.'
    //       : '';
    //     break;
    //   default:
    //     break;

    // }
    
    // this.setState({errors})
    // route, axios

  }
  // Calendar component callback function
  onDateChange = value => {
    this.setState({date: value, calendarAvailable: false});
  }

  onCalendarAvailable = event => {
    this.state.calendarAvailable === true
      ? this.setState({calendarAvailable: false})
      : this.setState({calendarAvailable: true})
  }

  // Passenger component callback function
  onIncreaseNumber = event => {
    this.setState({
      numOfPassengers: this.state.numOfPassengers + 1
    })
  }
  onDecreaseNumber = event => {
    this.setState({
      numOfPassengers: this.state.numOfPassengers <= 1
        ? 1
        : this.state.numOfPassengers - 1
    })
  }

  render() {
    const {errors, date, calendarAvailable, numOfPassengers} = this.state;

    return (
        <form onSubmit={this.handleSubmit}> 
          {/* departure destination part */}
          <LocationAutoSuggest name='departure' id='departure'/> 
          {errors.departure.length > 0 && <span className='error'>{errors.departure}</span>}
          <LocationAutoSuggest name='destination' id='destination'/> 
          {errors.departure.length > 0 && <span className='error'>{errors.destination}</span>}
          <div>
            {/* date part */}
            <div onClick={this.onCalendarAvailable}>
              {this
                .state
                .date
                .toDateString()
                .slice(0, 10)
                .replace(' ', ', ')}
            </div>
            <Calendar
              className={`${calendarAvailable
              ? `react-calendar-visible`
              : `react-calendar-notvisible`}`}
              onChange={this.onDateChange}
              name='date'
              value={date}/>
          </div>
          <div>
            {/* number of passenger part */}
            <div onClick={this.onIncreaseNumber}>
              증가
            </div>
            <input
              type="text"
              value={numOfPassengers}
              name="numOfPassengers"
              readOnly/>
            <div onClick={this.onDecreaseNumber}>감소</div>
          </div>
          <input type='submit' value='Search'/>
        </form>
    )
  }
}

export default SearchBar;