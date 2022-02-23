import {useState} from 'react';
import Background from '../General/Background';
import {Blog} from "./Blog"
import Houston from "./Houston.jpg"



export default function Blogs() {
    const blogs = useState<Blog[]>([]);
    return (
        <Background image={Houston} title="Blog">
            
        </Background>
    )
}