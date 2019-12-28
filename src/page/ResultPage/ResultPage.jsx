import React from "react";
import Result from "../../component/Result/Result";
import Map from "../../component/Map/Map";
import SearchBar from "../../component/SearchBar/SearchBar";
import "./resultpage.css";

import HowToGoService from "../../apis/index";

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      departure,
      destination,
      date,
      onDateChange,
      onDepChange,
      onDestChange
    } = this.props;
    return (
      <div>
        <SearchBar
          searchbarType="result"
          departure={departure}
          destination={destination}
          date={date}
          onDateChange={onDateChange}
          onDepChange={onDepChange}
          onDestChange={onDestChange}
        />
        <div className="result-page layout-horizontal-center">
          <Result />
          <Map />
        </div>
      </div>
    );
  }
}

export default ResultPage;
