import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from "react";
import Slider from "react-slick";
import './Menu.css';
import { useNavigate } from "react-router-dom";

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
    let navigate = useNavigate();
    return (
        <div className="Slide"> 
        <Slider {...settings}>
            <button onClick={() => {navigate("/Fatiha")}} className="BtnMenu">Al Fatiha</button>
            <button className="BtnMenu">Al Fil</button>
            <button className="BtnMenu">Quraish</button>
            <button className="BtnMenu">Al Maa'un</button>
            <button className="BtnMenu">Al Kawthar</button>
            <button className="BtnMenu">Al Kaafiroon</button>
            <button className="BtnMenu">An Nasr</button>
            <button className="BtnMenu">Al Masad</button>
            <button className="BtnMenu">Al Ikhlaas</button>
            <button className="BtnMenu">Al Falaq</button>
            <button className="BtnMenu">An Naas</button>
        </Slider>
        </div>

      
        
      

      );
}
 
export default Menu;