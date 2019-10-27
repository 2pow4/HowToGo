import React from 'react';
import wallpaper from '../../asset/wallpaper/wallpaper1.png';
import SearchBar from '../SearchBar/SearchBar';
const Wallpaper = () => {
    // make random wallpaper call
    // 
    const banner = ['언제든 떠날 수 있어요.', '훌쩍 떠나고 싶을 때가 지금인가요?', '여행하기 참 좋은 날이죠?']

    return (
        <div id='wallpaper' style={{'backgroundImage': 'url(' + wallpaper + ')'}}>
            <div id='banner'> 
                {banner[Math.floor(Math.random()*banner.length)]}
            </div>
            <SearchBar/>
        </div>
    )

}

export default Wallpaper