import "./project.css"

interface Props {
    //coolness is coolness rating of the project
    coolness:number,
    //project start is the project start date
    projectStart:string,
    //project end date
    projectEnd:string,
    //size of the project
    difficulty:string
}

interface AttributeProps {
    //title of the attribute
    title:string,
    //value of the attribute
    value:string,
}
//puts all of the attributes into a list
//based upon values passed in
export default function ProjectAttribute(props:Props) {
    return (
        <div className = "attribute-section">
        <Attribute title = "Timeline"
        value = {`${props.projectStart} - ${props.projectEnd}`} />
        <Attribute title = "Project Size" value = {props.difficulty} />
        <Attribute title = "Coolness" value = {props.coolness.toString()}/>
        </div>
    )
    
}
//generates an attribute
//stacks title on top of value
function Attribute(props:AttributeProps) {
    return (
        <div className = "attribute">
            <div className = "attribute-title">
                {props.title}
            </div>
            <div className = "attribute-value">
                {props.value}
            </div>
        </div>
    )
}
