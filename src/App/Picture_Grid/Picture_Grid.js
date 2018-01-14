import React, { Component } from "react";
import "./Picture_Grid.css";
import photo1 from "../Assets/picture_grid/photo_1.png";
import photo2 from "../Assets/picture_grid/photo_2.png";
import photo3 from "../Assets/picture_grid/photo_3.png";
import photo4 from "../Assets/picture_grid/photo_4.png";
import photo5 from "../Assets/picture_grid/photo_5.png";
import photo6 from "../Assets/picture_grid/photo_6.png";
import photo7 from "../Assets/picture_grid/photo_7.png";
import photo8 from "../Assets/picture_grid/photo_8.png";
import photo9 from "../Assets/picture_grid/photo_9.png";
import photo10 from "../Assets/picture_grid/photo_10.png";
import photo11 from "../Assets/picture_grid/photo_11.png";
import photo12 from "../Assets/picture_grid/photo_12.png";
import instagram from "../Assets/icons/instagram.png";

export default class Picture_Grid extends Component {
    render() {
        return (
            <div className="picture-grid">
                <div className="row">
                    <Image imageRef={photo1} alt="hot dog 1" />
                    <Image imageRef={photo2} alt="hot dog 2" />
                    <Image imageRef={photo3} alt="hot dog 3" />
                    <Image imageRef={photo4} alt="hot dog 4" />
                    <Image imageRef={photo5} alt="hot dog 5" />
                    <Image optSize="img-sm" imageRef={photo6} alt="hot dog 6" />
                </div>
                <div className="row">
                    <Image imageRef={photo7} alt="hot dog 7" />
                    <Image imageRef={photo8} alt="hot dog 8" />
                    <Image imageRef={photo9} alt="hot dog 9" />
                    <Image imageRef={photo10} alt="hot dog 10" />
                    <Image imageRef={photo11} alt="hot dog 11" />
                    <Image optSize="img-sm" imageRef={photo12} alt="hot dog 12" />
                </div>
                <div className="social">
                    <img src={instagram} alt="Instagram" />
                    #hotdogs
                </div>
            </div>
        );
    }
}

function Image(props) {
    return (
        <img className={props.optSize} src={props.imageRef} alt={props.alt} />
    );
}
