import React, { useEffect, useState } from 'react'
import API from '../../api/api'
import MemeDisplay, {Meme} from './MemeDisplay'
import '../../css/meme.css'
import Background from '../General/Background'
import '../../css/background-react.css'
function Memes() {
    const [memes, setMemes] = useState<Meme[]>([])

    useEffect(function() {
        (async function() {
            let results = await API.queryJson({route:"harambe"})
            setMemes(results)
        }())

    },[])

    return (
       <Background title = "Dank Memes"  image = {API.generateURL("/static/images/houston.jpg")} >

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
        </Background>
    )
}
export default React.memo(Memes)