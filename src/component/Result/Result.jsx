import React from "react";
import axios from "axios";
import moment from "moment";

import { withRouter } from "react-router-dom";
import "./result.css";

import Type from "./Type";
import Item from "./Item";
import SortedBy from "./Select";

class Result extends React.Component {
  constructor(props) {
    super(props);

    const query = new URLSearchParams(props.location.search);
    const type = query.get("type");

    this.state = {
      type: type || "bus",
      resultList: [],
      selectedOption: "departure_time"
    };
  }

  handleSelected = e => {
    this.setState({ selectedOption: e["value"] });
  };

  componentDidMount() {
    this._getList();
  }

  componentDidUpdate(prevProps) {
    let prevQuery = new URLSearchParams(prevProps.location.search);
    let prevType = prevQuery.get("type");

    let query = new URLSearchParams(this.props.location.search);
    let type = query.get("type");

    if (prevType !== type) {
      this.setState({
        type
      });
    }
  }

// TODO: need to export this 
  _getList() {
    axios
      .get("result_list.json")
      .then(response => {
        this.setState({
          resultList: response.data.resultList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="result-box">
        <Type />
        <hr/>
        <div className="layout-vertical-right sort-container">
          <div className="sort-text"> Sorted By </div>
          <SortedBy handleSelected={this.handleSelected} />
        </div>
        <div className="item-container">
          {this.state.resultList.length > 0 ? (
            this.state.selectedOption == "cost" ? (
              <Item
                className="item"
                list={this.state.resultList
                  .filter(item => item.type === this.state.type)
                  .sort((a, b) => a.cost - b.cost)}
              />
            ) : this.state.selectedOption == "departure_time" ? (
              <Item
                className="item"
                list={this.state.resultList
                  .filter(item => item.type === this.state.type)
                  .sort((a, b) => {
                    moment(a.departure_time, "HH:mm").diff(
                      moment(b.departure_time, "HH:mm"),
                      "minutes"
                    );
                  })}
              />
            ) : (
              <Item
                className="item"
                list={this.state.resultList
                  .filter(item => item.type === this.state.type)
                  .sort((a, b) => {
                    let intervalA = moment(a.arrival_time, "HH:mm").diff(
                      moment(a.departure_time, "HH:mm"),
                      "minutes"
                    );
                    let intervalB = moment(b.arrival_time, "HH:mm").diff(
                      moment(b.departure_time, "HH:mm"),
                      "minutes"
                    );
                    return intervalA - intervalB;
                  })}
              />
            )
          ) : (
            <span>LOADING...</span>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Result);
