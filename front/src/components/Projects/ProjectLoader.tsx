import Project, {ProjectInterface} from "./Project"
import {useState,useEffect} from "react"
import Section from '../Blog/Section'
import Text from '../Blog/Text'
import API from "../../api/api"
import TechStackSection from "./TechStack/TechStackSection"
import TechStackAttribute from "./TechStack/TechStackAttribute"
interface Props {
    //route on api to fetch server-side data
    route:string,
    //children inside the blog
    children?:any
}


//generates a generic blog for a project
//takes in a given route and children
export default function ProjectLoader(props:Props) {
    //project is the current project 
    //populated with data fromt the server
    const [project, setProject] = useState<ProjectInterface | null>(null)
    //when mounted fetches dynamic project data from the server
    useEffect(function() {
        (async function() {
            //queries api based upon the route
            let result:ProjectInterface = await API.queryJson({route:`project/${props.route}`})
            if(result == null) {
                //if route is not found 404
                window.location.href = API.generateURL("/404")
            }
            //set image to be image server url route
            result.image = API.generateURL(result.image)
            if (result.tech) {
                for(let i = 0; i < result.tech.length; i++) {
                    result.tech[i].image = API.generateURL(result.tech[i].image)
                }
            }
            //set project to be the newly retrieved object
            setProject(result)
        })()
    },[])
    //if project is loaded render it properly
    if (project) {
        return (
            <Project {...project}>
                {props.children}
            {project.tech &&
                project.tech.length > 0 &&
                <TechStackSection tech = {project.tech} />
            }
            
            </Project>
        )  
    } else {
        //if the project has not be loaded from server
        //show an empty div
        return (
            <div>
            </div>
        )  
    }
        
}