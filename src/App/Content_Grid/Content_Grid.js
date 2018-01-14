import React, { Component } from "react";
import "./Content_Grid.css";
import hotdogBeef from "../Assets/content/hotdog_beef.png";
import hotdogVegan from "../Assets/content/hotdog_vegan.png";
import hotdogVegetarian from "../Assets/content/hotdog_vegetarian.png";

export default class ContentGrid extends Component {
    render() {
        return (
            <div className="ContentGrid">
                <ContentRow
                    imageRef={hotdogBeef}
                    alt="Beef Hotdog"
                    headline="Gourmet All Beef Hotdogs"
                    text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                />
                <ContentRow
                    imageRef={hotdogVegan}
                    alt="Vegan Hotdog"
                    headline="Vegan Hotdogs"
                    text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                />
                <ContentRow
                    imageRef={hotdogVegetarian}
                    alt="Vegetarian Hotdog"
                    headline="Vegetarian Hotdogs"
                    text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                />
            </div>
        );
    }
}

function ContentRow(props) {
    return (
        <div className={"ContentRow"}>
            <BlockText headline={props.headline} text={props.text} />
            <BlockImage imageRef={props.imageRef} alt={props.alt} />
        </div>
    );
}

function BlockImage(props) {
    return (
        <div className="BlockImage">
            <img src={props.imageRef} alt={props.alt} />
        </div>
    );
}

function BlockText(props) {
    return (
        <div className="BlockText">
            <h2>{props.headline}</h2>
            <p>{props.text}</p>
        </div>
    );
}
