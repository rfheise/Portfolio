import React from 'react'
import '../../css/meme.css'

export interface Meme {
    id:number,
    image:string,
    caption:string,
}
//displays a meme with a caption on the memes page
//id is id of the meme used for meme array on memes page
//image is the src meme url
//caption is the image caption
function MemeDisplay(props:Meme) {
    return (
        <div className = "meme">
        <img className = "img" src = {props.image} alt = {props.caption} />
        <h2>
            {props.caption}
        </h2>
        </div>
    )
}

export default React.memo(MemeDisplay)