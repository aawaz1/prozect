import React from 'react';
import { NavLink } from 'react-router-dom';

function PracticeTwoItem(props) {
    return (
        <div className="col-md-4">
        <NavLink to="/PracticeArea-one">
            <div className="icon-box-item">
            
                <div className="icon-box__icon">
                    <img src={require('../../assets/img/' + props.img)} alt="Businex-Feature"/>
                </div>
                <div className="icon-box__info">
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                   
                </div>
            </div>
            </NavLink>
        </div>
    );
}

export default PracticeTwoItem;