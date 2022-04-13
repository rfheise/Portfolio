import Background from "../General/Background";
import Image from "./Image"
import "./blog.css"
import Header from "./Header"
import glasses from './texas.jpg'
import {Helmet} from "react-helmet";
interface Props {
    //title of blog
    title:string,
    //children elements
    children?:any,
    //blog image
    image?:any,
}

// creates a Blog skeleton
export default function Blog(props:Props) {
    return (
        <Background title = {props.title} image = {glasses}>
            <div className = "flex-center blog-container">
            <Helmet>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:image" content={props.image} />
            </Helmet>
            <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap" rel="stylesheet" />
            <div className = "blog-children flex-center">
            <Image src = {props.image} alt = "" />
            <Header text = {props.title} style = {{textAlign:"center"}}/>
            {props.children}
            </div>             
            </div>
        </Background>   
    )
}
