import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <ul>
                    <NavLink url={"#"} title={"Menu"} />
                    <NavLink url={"#"} title={"Catering"} />
                    <NavLink url={"#"} title={"About Us"} />
                    <NavLink url={"#"} title={"Contact"} />
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
