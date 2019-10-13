import React from "react";
import Map from './Map/Map.jsx'
import SearchBar from "./SearchBar/SearchBar.jsx";

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Map/>
                <SearchBar/>
            </div>
        )
    }
}

export default App;