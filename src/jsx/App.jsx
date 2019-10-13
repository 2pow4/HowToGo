import React from "react";
import Map from './Map.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Map/>
            </div>
        )
    }
}

export default App;