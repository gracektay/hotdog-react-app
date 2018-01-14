import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
    render() {
        const menuOptions = [
            { url: "#", title: "Menu" },
            { url: "#", title: "Catering" },
            { url: "#", title: "About Us" },
            { url: "#", title: "Contact" }
        ];
        return (
            <div className="Menu">
                <ul>
                    {menuOptions.map(item => (
                        <NavLink url={item.url} title={item.title} />
                    ))}
                </ul>
            </div>
        );
    }
}

function NavLink(props) {
    return (
        <li className="menu-list-item">
            <a href={props.url} className="Nav-Link">
                {props.title}
            </a>
        </li>
    );
}
