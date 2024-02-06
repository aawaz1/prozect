import { Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from '../../assets/img/logo.png'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area" id="logo">
                <div className="image-wrapper">
                <Link  to="/">
                    <img src={logo} alt="Businex-Logo" width="80%" />
                </Link>
                </div>
            </div>
        );
    }
}

export default Logo;