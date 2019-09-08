import React from 'react';

const Player = (props) =>{
    const source = "https://www.youtube.com/embed/" + props.videoId + "?autoplay=1&mute=1"
    return(
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src= {source} frameborder="0" ></iframe>
    )
}


export default Player;
