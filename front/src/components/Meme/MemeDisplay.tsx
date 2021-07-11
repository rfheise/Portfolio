import React from 'react'
import '../../css/meme.css'

export interface Meme {
    id:number,
    image:string,
    caption:string,
}

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