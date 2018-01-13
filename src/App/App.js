import React, { Component } from 'react';
import PictureGrid from './Picture_Grid/Picture_Grid'
import Footer from './Footer/Footer';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <PictureGrid />
                <Footer />
            </div>
        );
    }
}

export default App;
