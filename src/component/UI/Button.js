import React from "react";


export default function Button(props) {

    return(
            <a href={props.link} target="_blank"  className="btn center" rel="noreferrer">
            <span>{props.name}</span>
            </a>
    )
}