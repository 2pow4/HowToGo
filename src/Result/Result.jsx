import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import "./result.css"

import Type from "./Type.jsx"
import Item from "./Item.jsx";
import SortedBy from "./Select.jsx"

class Result extends React.Component {

    constructor(props){
        super(props);
        
        const query = new URLSearchParams(props.location.search);
        const type = query.get('type');
        
        this.state = {
            type: type || "bus",
            resultList : [],
            selectedOption: "departure_time"
        };
    }

    componentDidMount(){
        this._getList();
    }
    
    componentDidUpdate(prevProps){
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let prevType = prevQuery.get('type');

        let query = new URLSearchParams(this.props.location.search);
        let type = query.get('type');

        console.log(type)

        if(prevType !== type){
            this.setState({
                type
            })
        };
    }
    
    _getList(){
        axios.get("result_list.json")
            .then(response => {
                this.setState({
                    resultList : response.data.resultList
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render(){
        return(
            <div className="result-box">
                <Type />
                <hr/>
                <div className="sort-container">
                    <span className="sort-text"> Sorted By </span>
                    <SortedBy />
                </div>
                <div className="item-container">
                {
                    this.state.resultList.length > 0 ? (
                        this.state.selectedOption == 'cost' ? (
                        <Item className="item" list={
                            this.state.resultList
                            .filter( item => (
                                item.type === this.state.type
                            ))
                            .sort((a, b) => 
                                a.cost - b.cost
                            )} 
                        />
                        ) : (
                            this.state.selectedOption == 'departure_time' ? (
                                <Item className="item" list={
                                    this.state.resultList
                                    .filter( item => (
                                    item.type === this.state.type
                                    ))
                                    .sort((a, b) =>
                                        new Date(a.departure_time).getTime() - new Date(b.departure_time).getTime()
                                     )}
                                />
                            ) : (<Item className="item" list={
                                    this.state.resultList
                                    .filter( item => (
                                    item.type === this.state.type
                                    ))
                                    .sort((a, b) =>
                                        (new Date(a.arrival_time).getTime() - new Date(a.departure_time).getTime()) - (new Date(b.arrival_time).getTime() - new Date(b.departure_time).getTime())
                                     )} 
                                />
                            )
                        )
                    ) : (
                        <span>
                            LOADING
                        </span>
                    )
                }
                </div>
            </div>
        )
    }

}

export default withRouter(Result);