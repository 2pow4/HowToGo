import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";

const wallpaperContext = require.context('../../asset/wallpaper', false, /\.(png|jpe?g)$/)

let wallpapers = []
wallpaperContext.keys().map((items) =>
  wallpapers.push(items.replace('./', '/scripts/'))
)

const Wallpaper = () => {
  return (
    <div
      id="wallpaper"
      style={{
        backgroundImage:
          "url(" +
          wallpapers[Math.floor(Math.random() * wallpapers.length)] +
          ")"
      }}
    >
      <SearchBar />
      
    </div>
  );
};

export default Wallpaper;
