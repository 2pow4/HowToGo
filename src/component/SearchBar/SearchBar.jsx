import React from "react";
import Calendar from "react-calendar";
import LocationAutoSuggest from "./LocationAutoSuggest";
import "./searchbar.css";
import { Redirect } from "react-router-dom";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Calendar state
      calendarAvailable: false,
      numOfPassengers: 1
    };
  }

  // Submit data
  handleSubmit = event => {
    console.log(this.props.departure, this.props.destination);

    event.preventDefault();

    // TODO: searchbar type에 따라서 바꿔줘야함, 그리고 type에 따라서 handle해줌
    // TODO: make query call to /routes

    return <Redirect to="/results" />;
  };
  // AutoSuggest component function

  // Calendar component callback function
  handleDateChange = value => {
    this.setState({ calendarAvailable: false });
    this.props.onDateChange(value);
  };

  onCalendarAvailable = event => {
    this.state.calendarAvailable === true
      ? this.setState({ calendarAvailable: false })
      : this.setState({ calendarAvailable: true });
  };

  // Passenger component callback function
  onIncreaseNumber = event => {
    this.setState({
      numOfPassengers: this.state.numOfPassengers + 1
    });
  };
  onDecreaseNumber = event => {
    this.setState({
      numOfPassengers:
        this.state.numOfPassengers <= 1 ? 1 : this.state.numOfPassengers - 1
    });
  };

  render() {
    const { date, onDepChange, onDestChange } = this.props;
    const { calendarAvailable, numOfPassengers } = this.state;
    const searchbarType = this.props.searchbarType;
    const mainLable =
      searchbarType === "main" ? (
        <div id="label" className="content">
          {" "}
          어디로 가실래요?{" "}
        </div>
      ) : (
        ""
      );

    return (
      <div
        className={
          searchbarType === "main"
            ? `layout-vertical-center searchbar-${searchbarType} container__searchbar content__wallpaper`
            : `layout-vertical-center searchbar-${searchbarType}`
        }
      >
        {mainLable}
        <form className="content">
          {/* departure destination part */}
          <div className="layout-horizontal-center">
            <LocationAutoSuggest
              className="content__searchbar"
              id="departure"
              onValueChange={onDepChange}
            />{" "}
            <LocationAutoSuggest
              className="content__searchbar"
              id="destination"
              onValueChange={onDestChange}
            />{" "}
            <div>
              {/* date part */}
              <div
                onClick={this.onCalendarAvailable}
                className="content__searchbar searchbar-input"
              >
                {date
                  .toDateString()
                  .slice(0, 10)
                  .replace(" ", ", ")}
              </div>
              <Calendar
                className={`${
                  calendarAvailable
                    ? `react-calendar__visible`
                    : `react-calendar__invisible`
                }`}
                onChange={this.handleDateChange}
                name="date"
                value={date}
              />
            </div>
            <div className="content__searchbar container__passenger">
              {/* number of passenger part */}
              <div
                onClick={this.onDecreaseNumber}
                className="content__passenger layout-horizontal-center"
              >
                <i className="fas fa-minus-circle searchbar-button__passenger"></i>
              </div>
              <input
                className="content__passenger searchbar-input__passenger"
                type="text"
                value={`${numOfPassengers}명`}
                name="numOfPassengers"
                readOnly
              />
              <div
                onClick={this.onIncreaseNumber}
                className="content__passenger layout-horizontal-center"
              >
                <i className="fas fa-plus-circle searchbar-button__passenger"></i>
              </div>
            </div>
            <input
              type="button"
              value="Search"
              className="content__searchbar searchbar-button"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
