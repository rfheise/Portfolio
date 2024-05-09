import API from "../../../api/api";
import "./tech.css"
export interface TechAttribute {
    image:string,
    link:string,
    name:string

}
export default function TechStackAttribute(props:TechAttribute) {
    //wrapper for image
    return (
        <a className = "techAttribute" href = {props.link}>
            <img src = {props.image} alt = {props.name} className = "attribute-image" />
            <div>
                {props.name}
            </div>
        </a>
    )
}