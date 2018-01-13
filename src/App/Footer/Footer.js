import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright">®2016 Dirty Dogs all rights reserved</div>
        <div className="contact-links">
          274 Marconi Blvd.Columbus, Ohio 43215 | 614.538 .0095 | Contact Us
        </div>
      </div>
    );
  }
}
