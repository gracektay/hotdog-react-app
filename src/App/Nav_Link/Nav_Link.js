import React from "react";
import "./Nav_Link.css"

export default function NavLink(props) {
    return (
        <a href={props.url} className="Nav-Link">
            {props.title}
        </a>
    );
}