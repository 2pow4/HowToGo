import React from "react";
import Wallpaper from "../../component/Wallpaper/Wallpaper";
import Description from "../../component/Description/Description";

const HomePage = props => {
  const {
    departure,
    destination,
    date,
    onDateChange,
    onDepChange,
    onDestChange
  } = props;

  return (
    <>
      <Wallpaper
        departure={departure}
        destination={destination}
        date={date}
        onDateChange={onDateChange}
        onDepChange={onDepChange}
        onDestChange={onDestChange}
      />
      <Description />
    </>
  );
};
export default HomePage;
