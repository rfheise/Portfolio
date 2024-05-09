import "./blog.css"

interface Props {
    //children is inner html
    children?:string
}

//wrapper for paragraph tag
export default function Text(props:Props) {
    return (
        <p className = "blog-text">
            {props.children}
        </p>
    )
}