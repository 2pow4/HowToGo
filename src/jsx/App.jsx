import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Map from './Map/Map.jsx'
import SearchBar from "./SearchBar/SearchBar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <SearchBar/>
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