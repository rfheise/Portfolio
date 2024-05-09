

interface Props {
    //link text
    title:string,
    //route is a tag route
    route:string
}

//wrapper for a tag
export default function Link(props:Props) {
    return (
        <a className = "blog-link" href = {props.route}>
            {props.title}
        </a>
    )
}