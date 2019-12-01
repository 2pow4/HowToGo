import React from "react"

import './item.css'

const Item = (props) => {
    return(
        <ul>
            {props.list.map((item, index) => (
                <li key = {index}>
                    <div className="container__result">
                        <div className="ratio-3 container__dep-arr">
                            <div className="ratio-1 content__dep">
                                <div className="content__dep-time">
                                    <div className="content__time">
                                        {item.departure_time}
                                    </div>
                                    <div>
                                        <span/>
                                    </div>
                                </div>
                                <div>
                                    {item.departure_location}
                                </div>
                            </div>
                            <div className="ratio-1 content__arr">
                                <div className="content__time">
                                    {item.arrival_time}
                                </div>
                                <div>
                                    {item.arrival_location}
                                </div>
                            </div>
                        </div>
                        <div className="ratio-1 content__cost">
                            {item.cost}원
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Item;