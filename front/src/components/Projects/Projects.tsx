import Co2 from "./Projects/Co2view";
import LSB from "./Projects/LSB"
import Melody from "./Projects/Melody"
//page for easy package export
export const Co2View = Co2;
interface Project {
    route:string,
    component:any,
}

export const ProjectList:Project[] = [
    {route:"co2",component:Co2},
    {route:"lsb",component:LSB},
    {route:"melody",component:Melody}
]


