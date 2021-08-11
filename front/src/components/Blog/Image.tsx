import "./blog.css"

interface Props {
    src:any,
    alt:string,
    height?:string,
    width?:string
}

//wrapper for default image html field
export default function Image(props:Props) {
    return (
        <img className = "blog-img" style = {{height:props.height, width:props.width}} src = {props.src} alt = {props.alt} />
    )

}

