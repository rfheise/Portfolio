import { useState,useEffect } from "react";
import { ProjectInterface } from "./Project";
import london from "./london.jpg"
import Background from "../General/Background";
import ProjectDisplay from "./ProjectDisplay";
import API from "../../api/api";
export default function Projects() {
    const [projects, setProjects] = useState<ProjectInterface[]>([])
    useEffect(function() {
        (async function() {
            let projects = await API.queryJson({route:"projects"})
            for(let i = 0; i < projects.length; i++) {
                projects[i].image = API.generateURL(projects[i].image)
            }
            setProjects([projects[0]])
        })()
    },[])
    return (
        <Background  image = {london} title = "Projects">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
            {projects.map(project => {
                return (
                    <ProjectDisplay {...project} key = {project.uuid}/>
                )
            })}
        </Background>
    )
}