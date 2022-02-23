import "./blog.css"
import {Blog} from './Blog'

export function BlogContainer(blog:Blog) {
    console.log(blog)
    return (
        <a className = "project-display blog-home-container" href = {blog.url}>
            
            <div className = "project-logo-container">
            <img className = "project-logo" src = {"http://127.0.0.1:8000" +blog.image}/>
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