import React from 'react';

interface Props {
    children?:any
}
//wrapper for li
export default function List(props:Props) {
    return (
        <ul className = "blog-ul">
                {props.children}
        </ul >
    )
}
    