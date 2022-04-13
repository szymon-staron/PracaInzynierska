import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../images/slider1.jpg";
import slider2 from "../../../images/slider2.jpg";
import slider3 from "../../../images/slider3.jpg";
import slider4 from "../../../images/slider4.jpg";
import slider5 from "../../../images/slider5.jpg";
import slider6 from "../../../images/slider6.jpg";
import "./style.scss";

export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000
    };
    return (
        <div className="slider">

            <Slider {...settings}>
                <div className="slider__div">
                    <img src={slider1} alt="" />
                </div>
                <div>
                    <img src={slider2} alt="" />
                </div>
                <div>
                    <img src={slider3} alt="" />
                </div>
                <div>
                    <img src={slider4} alt="" />
                </div>
                <div>
                    <img src={slider5} alt="" />
                </div>
                <div>
                    <h3><img src={slider6} alt="" /></h3>
                </div>
            </Slider>
        </div>
    );
}
