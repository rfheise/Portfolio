import "./blog.css"

interface Props {
    //src is image src
    src:any,
    //alt is image alt
    alt:string,
    //height is image height
    height?:string,
    //width is image width
    width?:string
}

//wrapper for default image html field
export default function Image(props:Props) {
    return (
        <img className = "blog-img" style = {{height:props.height, width:props.width}} src = {props.src} alt = {props.alt} />
    )

}

