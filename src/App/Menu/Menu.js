import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <ul>
                    <li>
                        <NavLink url={"#"} title={"Menu"} />
                    </li>
                    <li>
                        <NavLink url={"#"} title={"Catering"} />
                    </li>
                    <li>
                        <NavLink url={"#"} title={"About Us"} />
                    </li>
                    <li>
                        <NavLink url={"#"} title={"Contact"} />
                    </li>
                </ul>
            </div>
        );
    }
}

function NavLink(props) {
    return (
        <a href={props.url} className="Nav-Link">
            {props.title}
        </a>
    );
}
