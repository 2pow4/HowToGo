import React from "react"
import {Link} from "react-router-dom";

const Item = (props) => {
    return(
        <ul>
            {props.list.map((item, index) => (
                <li key = {index}>
                    <Link to="/">
                        <div>
                            {item.date}
                            {item.cost}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Item;