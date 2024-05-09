import "./blog.css"
import {Blog} from './Blog'
export function BlogContainer(blog:Blog) {
    return (
        <a className = "project-display blog-home-container" href = {blog.url}>
            
            <div className = "project-logo-container">
            <img className = "project-logo" src = {blog.image}/>
            </div>
            <div className = "project-title">
                {blog.title}
            </div>
            <div className = "project-date">
                {blog.date}
            </div>
            <div className = "view-more-button">
                View More
            </div>
        </a>
    )
}