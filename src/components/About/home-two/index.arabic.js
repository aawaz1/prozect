import React, { useState } from 'react';
import parse from "html-react-parser";
import aboutData1 from "../../../data/About/home-two.json";
import aboutData2 from '../../../data/About/arabic-home-two.json'
import aboutThumb from '../../../assets/img/AboutSecondSection.jpg'
import {Link} from "react-router-dom";

const About2Arabic = () => {
    const [about] = useState(aboutData2);
   
    
    return (
        <div className="home-two-about-area" style={{backgroundImage:`url(${aboutThumb})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 d-lg-none">
                        <figure className="about-thumb">
                            <img src={require('../../../assets/img/' + about.thumb)} alt="Businex-About"/>
                        </figure>
                    </div>

                    <div className="col-lg-6">
                    <div className="about-content about-content--2">
                            
                             <h6>{about.title}</h6>
                            <h2>{parse(about.heading)}</h2>
                            {/* <span className="about-since">{aboutData.since}</span>  */}
                            
                            <p>{parse(about.text)}</p>
                            <p>{parse(about.text1)}</p>
                            <p>{parse(about.text2)}</p>
                            {/* <p>{parse(aboutData.text3)}</p> */}


                            {/* <Link to={`${process.env.PUBLIC_URL + aboutData.btnLink}`} className="btn-about">{aboutData.btnText} <i className="fa fa-angle-double-right"/></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About2Arabic;
