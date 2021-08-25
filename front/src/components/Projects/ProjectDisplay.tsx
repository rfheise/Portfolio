import { ProjectInterface } from "./Project";
import "./project.css"
import Header from '../Blog/Header'
import {Link} from "react-router-dom"

//display for displaying project on project select page
export default function ProjectDisplay(props:ProjectInterface) {
    return (
        <a className = "project-display" href = {`/react/projects/${props.route}`}>
            
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
            <a href = {`/react/projects/${props.route}`} className = "view-more-button">
                View More
            </a>
        </a>
    )
}