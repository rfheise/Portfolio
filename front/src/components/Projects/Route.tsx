import { useState,useEffect,useCallback } from "react";
import { ProjectInterface } from "./Project";
import DropDown from "../General/DropDown"
import london from "./london.jpg"
import Background from "../General/Background";
import ProjectDisplay from "./ProjectDisplay";
import API from "../../api/api";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectInterface[]>([])
    const [selection, setSeletion] = useState<string>("Size")
    useEffect(function() {
        let filter;
        switch(selection) {
            case "Coolness":
                filter = "coolness";
                break;
            case "Project Start":
                filter = "projectStart";
                break;
            case "Project End":
                filter = "projectEnd";
                break;
            default:
            filter = "difficulty";
        }
        (async function() {
            let projects = await API.queryJson({route:`projects?filter=${filter}`})
            for(let i = 0; i < projects.length; i++) {
                projects[i].image = API.generateURL(projects[i].image)
            }
            setProjects(projects)
        })()
    },[selection])
    //update options
    let list = ["Project Start","Project End", "Coolness", "Size"]
    const update = function(selection:string) {
        setSeletion(selection);
    }
    let projectContainerStyle:any = {
        display:"grid",
        gridTemplateColumns: "50% 50%",
        width:"90%",     
    }
    if (window.innerWidth < 1050) {
        projectContainerStyle = {
            ...projectContainerStyle,
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }
    }
    return (
        <Background  image = {london} title = "Projects" className = "project-background">
            <div className = "project-header">
                <div className = "project-header-title">
                    Projects
                </div>
                <DropDown title = "Sort"
                    selection = {selection}
                    update = {update}
                    list = {list}
                />
            </div>
           
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
            <div style = {projectContainerStyle} >
            {projects.map(project => {
                return (
                    <ProjectDisplay {...project} key = {project.uuid}/>
                )
            })}
            </div>
            
        </Background>
    )
}