import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    ®2016 Dirty Dogs all rights reserved
                </div>
                <ul className="contact-links">
                    <FooterLink
                        url="https://goo.gl/maps/5hL27CGCpbr"
                        target="_blank"
                        title="274 Marconi Blvd. Columbus, Ohio 43215"
                    />
                    <FooterLink url="#" title="614.538.0095" />
                    <FooterLink url="#" title="Contact Us" />
                </ul>
            </div>
        );
    }
}

function FooterLink(props) {
    return (
        <li className="FooterLink">
            <a target={props.target} href={props.url}>{props.title}</a>
        </li>
    );
}
