import { ProjectInterface } from "./Project";
import "./project.css"
import Header from '../Blog/Header'
import {Link} from "react-router-dom"

export default function ProjectDisplay(props:ProjectInterface) {
    return (
        <div className = "project-display">
            
            <div className = "project-logo-container">
            <img className = "project-logo" src = {props.image}/>
            </div>
            <div className = "project-title">
                {props.title}
            </div>
            <div className = "project-date">
                {props.projectStart}-{props.projectEnd}
            </div>
            <p className = "project-tagline">
                {props.tagline}
            </p>
            <a href = {`/projects/${props.route}`}>
                View More
            </a>
        </div>
    )
}