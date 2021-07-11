
import '../../css/meme.css'

export interface Meme {
    id:number,
    image:string,
    caption:string,
}

export default function MemeDisplay(props:Meme) {
    return (
        <div className = "meme">
        <img className = "img" src = {props.image} alt = {props.caption} />
        <h2>
            {props.caption}
        </h2>
        </div>
    )
}