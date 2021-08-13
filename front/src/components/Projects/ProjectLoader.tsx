import Project, {ProjectInterface} from "./Project"
import {useState,useEffect} from "react"
import Section from '../Blog/Section'
import Text from '../Blog/Text'
import API from "../../api/api"
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
            //set project to be the newly retrieved object
            setProject(result)
        })()
    },[])
    //if project is loaded render it properly
    if (project) {
        return (
            <Project {...project}>
                <Section title ="Lorem Ipsum">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </Section>
                <Section title ="Lorem Ipsum">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </Section>
                <Section title ="Lorem Ipsum">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </Section>
                {props.children}
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