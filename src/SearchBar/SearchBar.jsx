import React from 'react';
import Calendar from 'react-calendar';
import LocationAutoSuggest from './LocationAutoSuggest';
import './searchbar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Calendar state
      departure: ``,
      destination: ``,
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
    console.log(this.state.departure, this.state.destination)

    event.preventDefault();

    // switch (name) {   case 'destination':     errors.destination = value.length
    // == 0       ? '도착지를 입력하세요.'       : '';     break;   case 'departure':
    // errors.departure = value.length == 0       ? '출발지를 입력하세요.'       : ''; break;
    //   default:     break; } this.setState({errors}) route, axios

  }
  // AutoSuggest component function
  onDepChange = departure => {
    this.setState({departure})
  }

  onDestChange = destination => {
    this.setState({destination})
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
        <form onSubmit={this.handleSubmit} className='layout-vertical-center container'>
          {/* departure destination part */}
          <div id='label' className='content'> 어디로 가실래요? </div>
          <div className='layout-horizontal-center'>
            <LocationAutoSuggest
              className='content'
              id='departure'
              onValueChange={this.onDepChange}/> {errors.departure.length > 0 && <span className='error'>{errors.departure}</span>}
            <LocationAutoSuggest
              className='content'
              id='destination'
              onValueChange={this.onDestChange}/> {errors.departure.length > 0 && <span className='error'>{errors.destination}</span>}
            <div>
              {/* date part */}
              <div
                onClick={this.onCalendarAvailable}
                className='content searchbar-input'>
                {this
                  .state
                  .date
                  .toDateString()
                  .slice(0, 10)
                  .replace(' ', ', ')}
              </div>
              <Calendar
                className={`${calendarAvailable
                ? `react-calendar__visible`
                : `react-calendar__invisible`}`}
                onChange={this.onDateChange}
                name='date'
                value={date}/>
            </div>
            <div className='content container__passenger'>
              {/* number of passenger part */}
              <div onClick={this.onDecreaseNumber} className='content__passenger layout-horizontal-center'>
                <i className="fas fa-minus-circle searchbar-button__passenger"></i>
              </div>
              <input
                className='content__passenger searchbar-input__passenger'
                type="text"
                value={`${numOfPassengers}명`}
                name="numOfPassengers"
                readOnly/>
              <div onClick={this.onIncreaseNumber} className='content__passenger layout-horizontal-center'>
                <i className="fas fa-plus-circle searchbar-button__passenger"></i>
              </div>
            </div>
            <input
              type='submit'
              value='Search'
              className='content searchbar-button'/>
        </div>
        </form>
      
    )
  }
}

export default SearchBar;