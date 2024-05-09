import React from 'react';

interface Props {
    children?:any
}
//wrapper for ul
export default function ListItem(props:Props) {
    return (
    <li className = "blog-li">
        {props.children}
    </li>
    )
}