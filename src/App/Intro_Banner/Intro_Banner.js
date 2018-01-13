import React, { Component } from "react";
import "./Intro_Banner.css";
import hotdog from "../Assets/icons/hotdog.svg";

export default class IntroBanner extends Component {
  render() {
    return (
      <div class="IntroBanner">
        <img class="banner-icon" src={hotdog} alt="hot dog" />
        <Headline />
        <CTAButton />
      </div>
    );
  }
}

class Headline extends Component {
  render() {
    return (
      <div class="Headline">
        Dirty Dogs serves all-beef, vegan and vegetarian hot dogs.
      </div>
    );
  }
}

class CTAButton extends Component {
  render() {
    return (
      <button class="CTA-Button">
        More Dogs ‘n Make Em Hot
      </button>
    );
  }
}
