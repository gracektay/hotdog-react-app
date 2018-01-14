import React from "react";
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

export default class Picture_Grid extends React.Component {
  render() {
    return (
        <div className="picture-grid">
      <ul>
        <div className="row">
          <li><img src={photo1} alt="hot dog 1" /></li>
          <li><img src={photo2} alt="hot dog 2" /></li>
          <li><img src={photo3} alt="hot dog 3" /></li>
          <li><img src={photo4} alt="hot dog 4" /></li>
          <li><img src={photo5} alt="hot dog 5" /></li>
          <li><img src={photo6} alt="hot dog 6" /></li>
        </div>
        <div className="row">
          <li><img src={photo7} alt="hot dog 7" /></li>
          <li><img src={photo8} alt="hot dog 8" /></li>
          <li><img src={photo9} alt="hot dog 9" /></li>
          <li><img src={photo10} alt="hot dog 10" /></li>
          <li><img src={photo11} alt="hot dog 11" /></li>
          <li><img src={photo12} alt="hot dog 12" /></li>
        </div>
      </ul>
      <div className="social">
            <img src={instagram} alt="Instagram" />#hotdogs
        </div>
      </div>
    );
  }
}
