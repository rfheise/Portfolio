import { useState,useEffect } from "react";
import { ProjectInterface } from "./Project";
import london from "./london.jpg"
import Background from "../General/Background";
export default function Projects() {
    const [projects, setProjects] = useState<ProjectInterface[]>([])
    return (
        <Background  image = {london} title = "Projects">
            <h1>
                Projects
            </h1>
        </Background>
    )
}