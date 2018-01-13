import React, { Component } from "react";
import "./Menu.css";
import NavLink from  "../Nav_Link/Nav_Link";

export default class Menu extends Component {
  render() {
    return (
    <div class="Menu">
        <ul>
                    <li><NavLink url={"#"} title={"Menu"} /></li>
        <li><NavLink url={"#"} title={"Catering"} /></li>
        <li><NavLink url={"#"} title={"About Us"} /></li>
        <li><NavLink url={"#"} title={"Contact"} /></li>
            </ul>
        </div>
    );
  }
}
