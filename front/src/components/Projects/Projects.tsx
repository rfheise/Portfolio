import Co2 from "./Projects/Co2view";

export const Co2View = Co2;
interface Project {
    route:string,
    component:any,
}
export const ProjectList:Project[] = [
    {route:"co2",component:Co2},
]

