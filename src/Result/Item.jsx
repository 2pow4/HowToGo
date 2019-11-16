import React from "react"

import './item.css'

const Item = (props) => {
    return(
        <ul>
            {props.list.map((item, index) => (
                <li key = {index}>
                    <div className="result-item">
                        {item.type}
                        {item.departure_location}
                        {item.departure_time}
                        {item.arrival_location}
                        {item.arrival_time}
                        {item.cost}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Item;