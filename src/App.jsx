import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from  "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import HomePage from "./page/HomePage/HomePage";
import ResultPage from "./page/ResultPage/ResultPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/results" component={ResultPage}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
