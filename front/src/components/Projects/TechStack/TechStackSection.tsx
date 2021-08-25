import Header from "../../Blog/Header"
import TechStackAttribute,{TechAttribute} from "./TechStackAttribute"
interface Props {
    tech:TechAttribute[]
}

export default function TechStackSection(props:Props) {

    return (
        <div className = "blog-section">
            <Header text = "Tech Stack" style = {{
                color:"#3C3C3C",
                fontSize:"1.75rem",
                margin:"0rem 0rem .2rem 0rem"
            }}/>
            <div className = "techStackAttributes">
                {props.tech.map(tech =>  (
                    <TechStackAttribute {...tech} />
                ))}
            </div>
        </div>

    )

}