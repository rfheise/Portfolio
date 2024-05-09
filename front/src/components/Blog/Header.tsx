import "./blog.css"


interface Props {
    //text is header text
    text:string,
    // style is additonal style options
    style?:any
}

//wrapper for header
export default function Header(props:Props) {
    return (
        <div className = "header" style = {props.style}>
            {props.text}
        </div>
    )
}