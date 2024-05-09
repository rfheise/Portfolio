import {Blog} from "./Blog"
import {BlogContainer} from './BlogContainer'

interface Props {
    blogs:Blog[]
}


export function BlogDisplay({blogs}:Props) {
    //style for project container
    let projectContainerStyle:any = {
        display:"grid",
        gridTemplateColumns: "50% 50%",
        width:"90%",     
    }
    //if device width smaller than 1050 set different container
    //settings
    //keep this here in case I change my mind
    if (true || window.innerWidth < 1050) {
        projectContainerStyle = {
            ...projectContainerStyle,
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }
    }
    return (
        <div className = "blogDisplay" style = {projectContainerStyle}>
            {blogs.map(blog => <BlogContainer key = {blog.url} {...blog} />)}
        </div>
    )
}