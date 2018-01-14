import React, { Component } from "react";
import "./Content_Row.css";

export default class ContentRow extends Component {
    render() {
        var direction = this.props.index % 2 === 0 ? "" : "reverse";

        return (
            <div className={"ContentRow " + direction} >
                <BlockText
                    headline={this.props.headline}
                    text={this.props.text}
                />
                <BlockImage
                    imageRef={this.props.imageRef}
                    alt={this.props.alt}
                />
            </div>
        );
    }
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
