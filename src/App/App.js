import React, { Component } from "react";
import PictureGrid from "./Picture_Grid/Picture_Grid";
import Menu from "./Menu/Menu";
import IntroBanner from "./Intro_Banner/Intro_Banner";
import Footer from "./Footer/Footer";
import ContentGrid from "./Content_Grid/Content_Grid";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="body">
                    <PictureGrid />
                    <Menu />
                    <IntroBanner />
                    <ContentGrid />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
