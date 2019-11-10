import React from "react";
import Item from "./Item.jsx";
import axios from "axios";

class Result extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            vehicle_type: "bus",
            resultList: []
        }
    };

    componentDidMount(){
        this._getList();
    }

    _getList(){
        const apiUrl = '../dummy/result_list.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    resultList: data.data.resultList
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

}

export default Result