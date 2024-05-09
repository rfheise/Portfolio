import Co2 from "./Projects/Co2view"
import LSB from "./Projects/LSB"
import Melody from "./Projects/Melody"
import Heisepow from "./Projects/Heisepow"
import Dashit from "./Projects/Dashit"
import Youndle from "./Projects/Youndle"
import Boiler from "./Projects/BoilerBytes"
//page for easy package export
export const Co2View = Co2;
interface Project {
    route:string,
    component:any,
}

export const ProjectList:Project[] = [
    {route:"co2",component:Co2},
    {route:"lsb",component:LSB},
    {route:"heise", component:Heisepow},
    {route:"melody",component:Melody},
    {route:"dashit", component:Dashit},
    {route:"youndle", component:Youndle},
    {route:"boiler", component:Boiler}
]


