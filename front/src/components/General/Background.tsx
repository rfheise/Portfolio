import React from 'react'

interface Props {
    image:string,
    title:string,
    children:any
}

function Background(props:Props) {
    return (
        <div className = "overlay-parent">
        <title>{props.title}</title>
        <div className = "main-overlay">
            <div className = "overlay">

            </div>
            <div className = "background">
                <img className = "background-img" src = {props.image} alt = "houston" />
            </div>
            <div className ="main">
                {props.children}
            </div>
                
        </div>
            
    </div>
    )
    
}
export default React.memo(Background)