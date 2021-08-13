import { useState } from 'react';
import React from 'react'
import "./general.css"
import collapse from "./collapse.png"
import expand from "./expand.png"

interface Props {
    //list is a list of drop down options 
    list:any[],
    //update is a function that updates the selection in the parents state
    update(object:any):void,
    //title of the 
    title:string,
    selection?:any,
    style?:any,
}

function DropDown(props:Props) {
    const [display,setDisplay] = useState<boolean>(false);
    function updateParent(item:any) {
        function updater() {
            props.update(item)
        }
        return updater
    }
    return (
            <div className = "drop-down-menu" 
        style = {props.style} onClick = {() => {setDisplay(current => (!current))}}>
            <div className = "drop-down-list-wrapper">
            <div className = "list-header">
            <div className = "drop-down-title">
                {props.title}
            </div>
            {props.selection &&
            <div className = "drop-down-selection">
                {props.selection}
            </div>
            }
            
            {display?
               <img src = {collapse} className = "arrow" />
                :
                <img src = {expand} className = "arrow" />
                
            }
            </div>
            
            <div className = "drop-down-list" style = {
                display ? 
                {}:{display:"none"}
            }>
                {props.list.map(item => {
                    return (
                        <div className = "drop-down-item"
                        onClick = {updateParent(item)}>
                            {String(item)}
                        </div>
                    )
                })}
            </div>
            </div>
            </div>
        
    )
}
export default React.memo(DropDown);