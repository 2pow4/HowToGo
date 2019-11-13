import "./guide.css";
import React from "react";
import { FaBusAlt } from "react-icons/fa";
import { IoIosTrain, IoIosAirplane } from "react-icons/io";
import { GoDash } from "react-icons/go";

const Guide = () => {
  return (
    <div class="layout-vertical-center content__wallpaper">
      <div class="layout-horizontal-center content__guide">
        <div>
          <FaBusAlt className="icons" />
        </div>
        <div>
          <GoDash className="icons icons-dash" />
        </div>
        <div>
          <IoIosTrain className="icons icons-bigger" />
        </div>
        <div>
          <GoDash className="icons icons-dash" />
        </div>
        <div>
          <IoIosAirplane className="icons icons-bigger" />
        </div>
      </div>
      <div id="description" class="content__guide">
        세 가지 교통수단을 한 눈에 비교하세요!
      </div>
    </div>
  );
};

export default Guide;
