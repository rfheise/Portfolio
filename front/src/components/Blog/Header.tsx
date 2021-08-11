import "./blog.css"


interface Props {
    text:string,
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