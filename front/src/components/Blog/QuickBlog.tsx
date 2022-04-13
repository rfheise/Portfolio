import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Blog from "./Blog"
import Text from "./Text"
import background from "./spacex.jpg"
import BlogSection from  "./Section"
import Image from "./Image"
import Link from "./Link"
import sunglasses from "./texas.jpg"
import API from "../../api/api"
import Header from "./Header"

interface Section {
    type:string,
    value:string,
    header?:string,
    id:string
}

interface Blog {
    title:string,
    image?:string,
    sections:Section[]
}

//renders a section
function renderSection(section:Section) {
    let Component;
    if (section.type == "text") {
        Component = (<Text>{section.value}</Text>)
    } else if (section.type == "image") {
        Component = (<Image src = {section.value} alt = ""/>)
    } else if (section.type == "link") {
        if (section.header) {
            Component = (<Link route = {section.value} title = {section.header} />)
        } else {
            Component = (<Link route = {section.value} title = {section.value} />)
        }
    } else {
        Component = (<Text >{section.value}</Text>)
    }
    return  (
        <div className = "blog-section" key = {section.id}>
            {(section.header && section.type !== "link") &&
                <Header text = {section.header} style = {{
                    color:"#3C3C3C",
                    fontSize:"1.75rem",
                    margin:"0rem 0rem .2rem 0rem"
                }}/>
            }
            <div className = "section-column">
                { Component}
            </div>
        </div>
    )
}
function QuickBlogFunc() {
    //id from url paramater 
    const {id} = useParams<"id">()
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>({title:"Quick Blog", sections:[]})
    //initializes blog
    useEffect(function(){
        (async function() {
            let blog = await API.queryJson({route:`quick_blog/${id}`})
            setLoading(false)
            if (blog) {
                setBlog(blog)
            } else {
                window.location.href = "/404"
            }
        })()
    },[])
    if (loading) {
        return( <div></div>)
    }
    return (
        <Blog title = {blog.title} image = {blog.image?
        API.generateURL(blog.image):
        background}>
            {blog.sections.map(renderSection)}
        </Blog>
    )
}
export const QuickBlog:any = React.memo(QuickBlogFunc)
