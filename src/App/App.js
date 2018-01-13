import React, { Component } from "react";
import PictureGrid from "./Picture_Grid/Picture_Grid";
import Menu from "./Menu/Menu";
import IntroBanner from "./Intro_Banner/Intro_Banner";
import Footer from "./Footer/Footer";
import ContentRow from "./Content_Row/Content_Row";
import hdbeef from "./Assets/content/hotdog_beef.png";
import hdvegan from "./Assets/content/hotdog_vegan.png";
import hdvegetarian from "./Assets/content/hotdog_vegetarian.png";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="body">
                <PictureGrid />
                <Menu />
                <IntroBanner />
                <div class="ContentGrid">
                    <ContentRow
                        index={0}
                        url={hdbeef}
                        alt="Beef Hotdog"
                        headline="Gourmet All Beef Hotdogs"
                        text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                    />
                    <ContentRow
                        index={1}
                        url={hdvegan}
                        alt="Vegan Hotdog"
                        headline="Vegan Hotdogs"
                        text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                    />
                    <ContentRow
                        index={2}
                        url={hdvegetarian}
                        alt="Vegetarian Hotdog"
                        headline="Vegetarian Hotdogs"
                        text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                    />
                    </div>
                    </div>
                    <Footer />
            </div>
        );
    }
}

export default App;
