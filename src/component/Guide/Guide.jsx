import "./guide.css";
import React from "react";
import { FaBus, FaPlane, FaTrain, FaEllipsisH } from "react-icons/fa";
import { MdTrain } from "react-icons/md";
import { IconContext } from "react-icons";

const Guide = () => {
  return (
    <div className="layout-vertical-center content__wallpaper">
      <div className="layout-horizontal-center">
        <IconContext.Provider
          value={{ color: "white", size: "80px", className: "icons" }}
        >
          <div className="layout-horizontal-center">
            <FaBus /> <FaEllipsisH className="icons-smaller" />{" "}
            <MdTrain className="icons-bigger" />{" "}
            <FaEllipsisH className="icons-smaller" /> <FaPlane />
          </div>
        </IconContext.Provider>
      </div>
      <div id="guide">세 가지 교통수단을 한 눈에 비교하세요!</div>
    </div>
  );
};

export default Guide;
