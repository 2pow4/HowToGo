import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import HomePage from "./page/HomePage/HomePage";
import ResultPage from "./page/ResultPage/ResultPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: ``,
      destination: ``,
      date: new Date()
    };
  }

  onDepChange = departure => {
    this.setState({ departure });
  };

  onDestChange = destination => {
    this.setState({ destination });
  };

  onDateChange = date => {
    this.setState({ date });
  };

  render() {
    const { departure, destination, date } = this.state;
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/home"
            render={() => (
              <HomePage
                departure={departure}
                destination={destination}
                date={date}
                onDateChange={this.onDateChange}
                onDepChange={this.onDepChange}
                onDestChange={this.onDestChange}
              />
            )}
          />
          <Route
            path="/results"
            render={() => (
              <ResultPage
                departure={departure}
                destination={destination}
                date={date}
                onDateChange={this.onDateChange}
                onDepChange={this.onDepChange}
                onDestChange={this.onDestChange}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
