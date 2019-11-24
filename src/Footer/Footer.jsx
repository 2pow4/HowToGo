import React from "react";
import "./footer.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="layout-vertical-center">
      <div className="layout-vertical-center">
        <div className="text content__footer"> COPYRIGHT© 2POW4 </div>
        <div className="text text-small content__footer">contact with</div>
        <IconContext.Provider
          value={{ color: "white", size: "20px", className: "icons__footer" }}
        >
          <div className="layout-horizontal-center content__footer">
            <a href="https://github.com/2pow4/HowToGo"> <FaGithub /> </a> 
            <a href="#"> <FaFacebook /> </a>
            <a href="#"> <FaInstagram /> </a>
          </div>
        </IconContext.Provider>
        <div className="text text-small content__footer">
          HOWTOGO / Hanyang Academic Contest
        </div>
      </div>
    </footer>
  );
};

export default Footer;
