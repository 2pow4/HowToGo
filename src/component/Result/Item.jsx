import React from "react";
import moment from "moment";
import { AiOutlineSmallDash } from "react-icons/ai";
import { IconContext } from "react-icons";

import "./item.css";

const Item = props => {
  return (
    <ul className="layout-vertical-center">
      {props.list.map((item, index) => {
        const elapseTime = moment(item.arrival_time, "HH:mm").diff(
          moment(item.departure_time, "HH:mm"),
          "minutes"
        );
        console.log(elapseTime)
        return (
          <li key={index} className="container__result">
            <div className="ratio-3 container__dep-arr layout-horizontal-center">
              <div className="ratio-1">
                <div className="content__time">{item.departure_time}</div>
                <div>{item.departure_location}</div>
              </div>
              <div className="ratio-2  layout-horizontal-center">
                <IconContext.Provider value={{ color: "#bbbbbb", size: "30px"}}>
                  <AiOutlineSmallDash></AiOutlineSmallDash>{"   "} 
                  <div className='content__elapse-time'>{`   ${elapseTime}분   `}</div> 
                  {"   "}<AiOutlineSmallDash></AiOutlineSmallDash>
                </IconContext.Provider> 
                <div>&emsp;&emsp;</div>
              </div>
              <div className="ratio-1">
                <div className="content__time">{item.arrival_time}</div>
                <div>{item.arrival_location}</div>
              </div>
            </div>
            <div className="ratio-1 content__cost">{item.cost}원</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Item;
