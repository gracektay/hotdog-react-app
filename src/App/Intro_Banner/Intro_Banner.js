import React, { Component } from "react";
import "./Intro_Banner.css";
import hotdog from "../Assets/icons/hotdog.svg";

export default class IntroBanner extends Component {
    render() {
        return (
            <div className="IntroBanner">
                <img className="banner-icon" src={hotdog} alt="hot dog" />
                <Headline />
                <CTAButton />
            </div>
        );
    }
}

class Headline extends Component {
    render() {
        return (
            <div className="Headline">
                Dirty Dogs serves all-beef, vegan and vegetarian hot dogs.
            </div>
        );
    }
}

class CTAButton extends Component {
    render() {
        return <button className="CTA-Button">More Dogs ‘n Make Em Hot</button>;
    }
}
