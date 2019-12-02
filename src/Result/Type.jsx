import React from 'react'
import {Link} from 'react-router-dom'
import { FaBus, FaPlane, FaTrain} from "react-icons/fa";
import { IconContext } from "react-icons";

import './type.css'

const Type = (props) => (
    <ul className="type">
        <li className={props.type === 'bus' ? 'tab_type_on' : 'tab_type_off'}>
           <IconContext.Provider value={{ color: '#332563', size: "20px", className: "type-icon"}}>
                <FaBus/>
            </IconContext.Provider>
            <Link className='link' to="/results?type=bus" > Bus </Link>
        </li>
        <li className={props.type === 'train' ? 'tab_type_on' : 'tab_type_off'}>
            <IconContext.Provider value={{ color: '#332563', size: "20px", className: "type-icon"}}>
                <FaTrain/>
            </IconContext.Provider>           
            <Link className='link' to="/results?type=train" > Train </Link>
        </li>
        <li className={props.type === 'plane' ? 'tab_type_on' : 'tab_type_off'}>
            <IconContext.Provider value={{ color: '#332563', size: "20px", className: "type-icon"}}>
                <FaPlane/>
            </IconContext.Provider>
            <Link className='link' to="/results?type=plane" > Plane </Link>
        </li>
    </ul>
)

export default Type;