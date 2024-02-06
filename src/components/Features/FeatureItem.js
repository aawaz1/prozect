import React from "react";
import { Link, NavLink } from "react-router-dom";

function FeatureItem(props) {
  return (
    <div className="col-md-4 mt-4 mb-5">
      {/* <NavLink to="/PracticeArea-one"> */}
        <div className="icon-box-item">
          <div className="icon-box__icon">
            <img
              src={require("../../assets/img/" + props.img)}
              alt="Businex-Feature"
            />
          </div>
          <div className="icon-box__info">
            <h5>{props.title}</h5>
            <p style={{ color: "black" }}>{props.text}</p>
            <div className="mt-3">
              <Link to={props.link}>
                <button>LEARN MORE</button>
              </Link>
            </div>
          </div>
        </div>
      {/* </NavLink> */}
    </div>
  );
}

export default FeatureItem;
