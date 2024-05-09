import Header from './Header'

export enum SectionFormat {
    row,
    column
}
interface Props {
    //children is html inside of the section
    children?:any,
    //format is format option
    format?:SectionFormat,
    //title is section header
    title:string,
}

//default section for quick text generation
//kind of like latex section
export default function Section(props:Props) { 
    //set section format
    let format = "section-column"
    if (props.format && props.format.valueOf() == SectionFormat.row.valueOf()) {
        format = "section-row"
    }
    return (
        <div className = "blog-section">
            <Header text = {props.title} style = {{
                color:"#3C3C3C",
                fontSize:"1.75rem",
                margin:"0rem 0rem .2rem 0rem"
            }}/>
            <div className = {format}>
                {props.children}
            </div>
        </div>
    )
}
