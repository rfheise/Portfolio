import React from 'react'

//image is image url
//title is title of the page
// children is the body that goes on top of the image
interface Props {
    image:string,
    title:string,
    children:any
}

//used to set a image background 
//that has main components scroll on top of image
//mainly just to resue css and html
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