import React from 'react'
import {Link} from 'react-router-dom'

import './type.css'

const Type = (props) => (
    <ul className="type">
        <li className={props.type === 'bus' ? 'tab_type_on' : 'tab_type_off'}>
            <Link to="/results?type=bus" > Bus </Link>
        </li>
        <li className={props.type === 'train' ? 'tab_type_on' : 'tab_type_off'}>
            <Link to="/results?type=train" > Train </Link>
        </li>
        <li className={props.type === 'plane' ? 'tab_type_on' : 'tab_type_off'}>
            <Link to="/results?type=plane" > Plane </Link>
        </li>
    </ul>
)

export default Type;