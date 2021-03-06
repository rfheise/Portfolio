import Blog from "../Blog/Blog"
import sunglasses from "./tshirt.png"
import ProjectAttributes from "./ProjectAttributes"
import Link from "../Blog/Link"
import { TechAttribute } from "./TechStack/TechStackAttribute"
//skeleton for project section
export interface ProjectSection {
    //section text
    text:string,
    //title of section
    title:string
}
export interface ProjectInterface {
    //coolness value
    coolness:number,
    //difficulty of project
    difficulty:string,
    //project start date
    projectStart:string,
    //project end date
    projectEnd:string,
    //optional link to project
    link?:string,
    //url of project logo
    image:string,
    //title of the page
    title:string,
    //project title
    uuid?:string,
    //short project description
    tagline?:string,
    //inner html of wrapper
    children?:any,
    //route for blog
    route?:string,
    //list of tech stacks
    tech?:TechAttribute[]
}

//wrapper for project blog
//generates a Blog skeleton based upon the passed in project
export default function ProjectWrapper(props:ProjectInterface) {
    return (
        <Blog title = {props.title} image = {props.image}>
            <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;500;600&display=swap" rel="stylesheet"></link>
            {props.link &&
                <Link route = {props.link} title = {props.link} />
            }
            <ProjectAttributes projectStart = {props.projectStart}
            projectEnd = {props.projectEnd} difficulty = {props.difficulty}
            coolness = {props.coolness} />
            {props.children}
        </Blog>
    )
}