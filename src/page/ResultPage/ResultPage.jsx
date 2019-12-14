import React from "react";
import Result from "../../component/Result/Result";
import Map from "../../component/Map/Map";
import SearchBar from "../../component/SearchBar/SearchBar";
import "./resultpage.css";

//axios, 즉 api를 부르고 주입해주는 건 모두 이 레벨 단에서 해야하는게 맞을 듯?

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SearchBar searchbarType="result" />
        <div className="result-page layout-horizontal-center">
          <Result />
          <Map />
        </div>
      </>
    );
  }
}

export default ResultPage;
