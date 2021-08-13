import { useState,useEffect,useCallback } from "react";
import { ProjectInterface } from "./Project";
import DropDown from "../General/DropDown"
import london from "./london.jpg"
import Background from "../General/Background";
import ProjectDisplay from "./ProjectDisplay";
import API from "../../api/api";

export default function Projects() {
    //list of projects to query from server
    const [projects, setProjects] = useState<ProjectInterface[]>([])
    //selection is the value we are sorting by
    const [selection, setSeletion] = useState<string>("Size")
    //grab all projects initially and whenever
    //the user changes the sort option
    useEffect(function() {
        let sort;
        //convert drop down filter to accepted api values
        switch(selection) {
            case "Coolness":
                sort = "coolness";
                break;
            case "Project Start":
                sort = "projectStart";
                break;
            case "Project End":
                sort = "projectEnd";
                break;
            default:
            sort = "difficulty";
        }
        (async function() {
            //grab all objects sorted by the given query
            let projects = await API.queryJson({route:`projects?filter=${sort}`})
            for(let i = 0; i < projects.length; i++) {
                //iterate over all the projects
                //set image url to be server-side image url
                projects[i].image = API.generateURL(projects[i].image)
            }
            //update projects with new projects list
            setProjects(projects)
        })()
    },[selection])
    //update options for drop down
    let list = ["Project Start","Project End", "Coolness", "Size"]
    //update function for drop down
    const update = function(selection:string) {
        setSeletion(selection);
    }
    //style for project container
    let projectContainerStyle:any = {
        display:"grid",
        gridTemplateColumns: "50% 50%",
        width:"90%",     
    }
    //if device width smaller than 1050 set different container
    //settings
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