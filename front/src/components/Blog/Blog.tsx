import Background from "../General/Background";
import Image from "./Image"
import "./blog.css"
import Header from "./Header"
import glasses from './texas.jpg'
interface Props {
    //title of blog
    title:string,
    //children elements
    children?:any,
    //blog image
    image?:any,
}


export default function Blog(props:Props) {
    return (
        <Background title = "" image = {glasses}>
            <div className = "flex-center blog-container">
            <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap" rel="stylesheet" />
            <div className = "blog-children flex-center">
            <Image src = {props.image} alt = {props.title} />
            <Header text = {props.title} style = {{textAlign:"center"}}/>
            {props.children}
            </div>             
            </div>
        </Background>   
    )
}
