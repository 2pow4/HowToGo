import React from 'react'
import {Link} from 'react-router-dom'

import './type.css'

const Type = (props) => (
    <ul className="type">
        <li>
            <Link to="/results?type=bus" className={props.type == 'bus' ? 'tab_type on' : 'tab_type'}> Bus </Link>
        </li>
        <li>
            <Link to="/results?type=train" className={props.type == 'train' ? 'tab_type on' : 'tab_type'}> Train </Link>
        </li>
        <li>
            <Link to="/results?type=plane" className={props.type == 'plane' ? 'tab_type on' : 'tab_type'}> Plane </Link>
        </li>
    </ul>
)

export default Type;