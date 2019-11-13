import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Map from './Map/Map.jsx'
import NavBar from  "./NavBar/NavBar.jsx";
import Wallpaper from "./Wallpaper/Wallpaper.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/home">
            <Wallpaper/>
          </Route>
          <Route path="/results">
            <Map/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;