import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Guide from "../Guide/Guide";

const wallpaperContext = require.context(
  "../../../asset/wallpaper",
  false,
  /\.(png|jpe?g)$/
);

let wallpapers = [];
wallpaperContext
  .keys()
  .map(items => wallpapers.push(items.replace("./", "/scripts/")));

const randomIndex = Math.floor(Math.random() * wallpapers.length)

const Wallpaper = props => {
  const {
    departure,
    destination,
    date,
    onDateChange,
    onDepChange,
    onDestChange
  } = props;
  
  return (
    <div
      id="wallpaper"
      style={{
        backgroundImage:
          "url(" +
          wallpapers[randomIndex] +
          ")"
      }}
      className="layout-vertical-center"
    >
      <SearchBar
        searchbarType="main"
        departure={departure}
        destination={destination}
        date={date}
        onDateChange={onDateChange}
        onDepChange={onDepChange}
        onDestChange={onDestChange}
      />
      <Guide />
    </div>
  );
};

export default Wallpaper;
