import React, { useEffect, useState } from 'react'
import API from '../../api/api'
import MemeDisplay, {Meme} from './MemeDisplay'
import '../../css/meme.css'
import '../../css/background-react.css'
export default function Memes() {
    const [memes, setMemes] = useState<Meme[]>([])

    useEffect(function() {
        (async function() {
            let results = await API.queryJson({route:"harambe"})
            setMemes(results)
        }())

    },[])

    return (
        <div className = "overlay-parent">
        <title>Dank Memez</title>
        <div className = "main-overlay">
            <div className = "overlay">

            </div>
            <div className = "background">
                <img className = "background-img" src = {API.generateURL("/static/images/houston.jpg")} alt = "houston" />
            </div>
            <div className ="main">
                <h1>
                    CS Memes
                </h1>
                <div className = "memes">
                    {memes.map(meme => {
                        return (
                            <MemeDisplay key = {meme.id} id = {meme.id} caption = {meme.caption} image = {API.generateURL(meme.image)} />
                        )
                    })}
                    
                </div>
            </div>
            
        </div>
        
    </div>
    )
}