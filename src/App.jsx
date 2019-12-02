import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Result from './Result/Result.jsx';
import Map from './Map/Map.jsx'
import NavBar from  "./NavBar/NavBar.jsx";
import Wallpaper from "./Wallpaper/Wallpaper.jsx";
import Footer from "./Footer/Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Wallpaper />
          </Route>
          <Route path="/results">
            <Result/>
            <Map/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
