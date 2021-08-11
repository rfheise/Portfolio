import Project, {ProjectInterface} from "./Project"
import {useState,useEffect} from "react"
import Section from '../Blog/Section'
import Text from '../Blog/Text'
import API from "../../api/api"
interface Props {
    route:string,
    children?:any
}

export default function ProjectLoader(props:Props) {
    const [project, setProject] = useState<ProjectInterface | null>(null)
    useEffect(function() {
        (async function() {
            let result:ProjectInterface = await API.queryJson({route:`project/${props.route}`})
            if(result == null) {
                window.location.href = API.generateURL("/404")
            }
            result.image = API.generateURL(result.image)
            setProject(result)
        })()
    },[])
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
        return (
            <div>
            </div>
        )  
    }
        
}