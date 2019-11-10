import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";

import wallpaper0 from '../../asset/wallpaper/wallpaper0.png';

const Wallpaper = () => {

    const wallpapers = [wallpaper0, wallpaper1, wallpaper2, wallpaper3, wallpaper4]    
    return (
        <div id='wallpaper' style={{'backgroundImage': 'url(' + wallpapers[Math.floor(Math.random()*wallpapers.length)] + ')'}}>
            <SearchBar/>
        </div>
    )

}

export default Wallpaper;