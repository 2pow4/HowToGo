import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import wallpaper0 from '../../asset/wallpaper/wallpaper0.png';
import wallpaper1 from '../../asset/wallpaper/wallpaper1.png';
import wallpaper2 from '../../asset/wallpaper/wallpaper2.png';
import wallpaper3 from '../../asset/wallpaper/wallpaper3.png';
import wallpaper4 from '../../asset/wallpaper/wallpaper4.png';

const Wallpaper = () => {

    const wallpapers = [wallpaper0, wallpaper1, wallpaper2, wallpaper3, wallpaper4]    
    return (
        <div id='wallpaper' style={{'backgroundImage': 'url(' + wallpapers[Math.floor(Math.random()*wallpapers.length)] + ')'}}>
            <SearchBar/>
        </div>
    )

}

export default Wallpaper;