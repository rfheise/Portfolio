import "./project.css"

interface Props {
    coolness:number,
    projectStart:string,
    projectEnd:string,
    difficulty:string
}

interface AttributeProps {
    title:string,
    value:string,
}
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
