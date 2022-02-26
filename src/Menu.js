import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from "react";
import Slider from "react-slick";
import './Menu.css';

const Menu = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        arrows: false
    };
    return (
        <div className="Slide"> 
        <Slider {...settings}>
            <button className="BtnMenu">Match1</button>
            <button className="BtnMenu">Match2</button>
            <button className="BtnMenu">Match3</button>
            <button className="BtnMenu">Match4</button>
            <button className="BtnMenu">Match5</button>
        </Slider>
        </div>

      
        
      

      );
}
 
export default Menu;