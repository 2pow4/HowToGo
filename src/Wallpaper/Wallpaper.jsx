import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import wallpaper0 from '../../asset/wallpaper/wallpaper0.png';
import wallpaper1 from '../../asset/wallpaper/wallpaper1.png';
import wallpaper2 from '../../asset/wallpaper/wallpaper2.png';
import wallpaper3 from '../../asset/wallpaper/wallpaper3.png';
import wallpaper4 from '../../asset/wallpaper/wallpaper4.png';

const Wallpaper = () => {
    // make random wallpaper call
    // 
    const banner = ['언제든 떠날 수 있어요.', '훌쩍 떠나고 싶을 때가 지금인가요?', '여행하기 참 좋은 날이죠?']
    const wallpapers = [wallpaper0, wallpaper1, wallpaper2, wallpaper3, wallpaper4]
    
    return (
        <div id='wallpaper' style={{'backgroundImage': 'url(' + wallpapers[Math.floor(Math.random()*wallpapers.length)] + ')'}}>
            {/* <div id='banner'> 
                {banner[Math.floor(Math.random()*banner.length)]}
            </div> */}
            <SearchBar/>
        </div>
    )

}

export default Wallpaper