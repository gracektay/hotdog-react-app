import React, { Component } from "react";
import "./Content_Row.css";

export default class ContentRow extends Component {
    render() {
        if (this.props.index % 2 !== 0) {
            return (
                <div className="ContentRow">
                    <BlockImage url={this.props.url} alt={this.props.alt} />
                    <BlockText
                        headline={this.props.headline}
                        text={this.props.text}
                    />
                </div>
            );
        } else {
            return (
                <div className="ContentRow">
                    <BlockText
                        headline={this.props.headline}
                        text={this.props.text}
                    />
                    <BlockImage url={this.props.url} alt={this.props.alt} />
                </div>
            );
        }
    }
}

function BlockImage(props) {
    return (
        <div className="BlockImage">
            <img src={props.url} alt={props.alt} />
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
