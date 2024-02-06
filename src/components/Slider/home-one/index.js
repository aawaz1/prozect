import React from 'react';
import SlickSlider from '../../UI/Slick'
import SliderData from '../../../data/Slider/home-1'
import {Link} from "react-router-dom";


const NextArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-right"/></button>
    )
};

const PrevArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-left"/></button>
    )
};

// {
//   "id": 1,
//   "title": "Effective Legal Solutions",
//   "text": "Effective Legal Solutions –    Sydney & Central Coast Lawyers for Family & Business",
//   "bg": "slider/01.jpg",
//   "btnText": "Learn More",
//   "btnLink": "/about"
// },

const Slider = () => {
        const settings = {
            arrows: true,
            dots: false,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className={'slider-area'}>
                <SlickSlider settings={settings}>
                    {
                        SliderData.map(item => (
                            <div key={item.id}>
                                <div className="slider-item"
                                     style={{backgroundImage: `url(${require('../../../assets/img/' + item.bg)})`}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-7">
                                                <div className="slider-content">
                                                    <h2 style={{color:"white"}}>{item.title}</h2>
                                                    <p style={{color:"white"}}>{item.text}</p>
                                                    <Link to={`${process.env.PUBLIC_URL + item.btnLink}`} className="btn btn-brand">{item.btnText}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SlickSlider>
            </div>
        );
    }
;

export default Slider;