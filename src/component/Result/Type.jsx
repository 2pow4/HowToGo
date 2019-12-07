import React from "react";
import { Link } from "react-router-dom";
import { FaBus, FaPlane, FaTrain } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./type.css";

const Type = props => (
  <ul className="type layout-horizontal-space">
    <li
      className={props.type === "bus" ? "tab tab_type_on" : "tab tab_type_off"}
    >
      <div className="type-content">
        <IconContext.Provider value={{ color: "#332563", size: "20px" }}>
          <FaBus />
        </IconContext.Provider>
        <Link className="link" to="/results?type=bus">
          {" "}
          Bus{" "}
        </Link>
      </div>
    </li>
    <li
      className={
        props.type === "train" ? "tab tab_type_on" : "tab tab_type_off"
      }
    >
      <div className="type-content">
        <IconContext.Provider value={{ color: "#332563", size: "20px" }}>
          <FaTrain />
        </IconContext.Provider>
        <Link className="link" to="/results?type=train">
          {" "}
          Train{" "}
        </Link>
      </div>
    </li>
    <li
      className={
        props.type === "plane" ? "tab tab_type_on" : "tab tab_type_off"
      }
    >
      <div className="type-content">
        <IconContext.Provider value={{ color: "#332563", size: "20px" }}>
          <FaPlane />
        </IconContext.Provider>
        <Link className="link" to="/results?type=plane">
          {" "}
          Plane{" "}
        </Link>
      </div>
    </li>
  </ul>
);

export default Type;
