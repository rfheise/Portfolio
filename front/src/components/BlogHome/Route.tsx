import {useEffect, useState} from 'react';
import Background from '../General/Background';
import {Blog} from "./Blog"
import Houston from "./Houston.jpg"
import { BlogDisplay } from './BlogDisplay';
import API from '../../api/api';


export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(function() {
        (async function() {
            let req = await API.queryJson({route:"blogs"})
            if (req) {
                for(let i = 0; i < req.length; i++) {
                    req[i].image = API.generateURL(req[i].image)
                }
                setBlogs(req)
            }
        })()
    },[])
    return (
        <Background image={Houston} title="Blog">
            <div className = "project-header-title blog-header">
                    Blog Posts
            </div>
            <BlogDisplay blogs = {blogs} />
        </Background>
    )
}