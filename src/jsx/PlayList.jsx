import React from 'react';


const PlayList = (props) =>{
    return(
        <div onClick={props.handleClick.bind(this, props.videoId)}>
            <div>
                {props.channelTitle}   
            </div>
            <br/>
            <div>
                {props.title}
            </div>
            <img src={props.thumbnail} alt='thumbnail'></img>
        </div>
    )
}

export default PlayList;