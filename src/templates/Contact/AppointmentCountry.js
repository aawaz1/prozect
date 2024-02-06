import React from "react";
import { Link } from "react-router-dom";

const AppointmentCountry = () => {
  return (
    <>
      <div className="conatiner" style={{ textAlign: "center" }}>
        <div className="row" >
          <div className={"col-md-6 col-lg-4"}>
            <div className="blog-item">
              <Link to="/BookCountryLawyers">
                {
                  <figure className="blog-thumb">
                    <img
                      src={require("../../assets/img/icons/saudiArab.png")}
                      alt="" width="50%" class="rounded"
                    />
                  </figure>
                }
                <div className="blog-content">
                  <h5>Saudi Arabia</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className={"col-md-6 col-lg-4"}>
            <div className="blog-item">
            <Link to="/BookCountryLawyers">
                {
                  <figure className="blog-thumb">
                    <img
                      src={require("../../assets/img/icons/Kuwait.png")}
                      alt="" width="50%"
                    />
                  </figure>
                }
                <div className="blog-content">
                  <h5>Kuwait</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className={"col-md-6 col-lg-4"}>
            <div className="blog-item">
              <Link to="/BookCountryLawyers">
                {
                  <figure className="blog-thumb">
                    <img
                      src={require("../../assets/img/icons/UnitedStateEmirates.png")}
                      alt="" width="50%"
                    />
                  </figure>
                }
                <div className="blog-content">
                  <h5>United State Emirates</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className={"col-md-6 col-lg-4"}>
            <div className="blog-item">
              <Link to="/BookCountryLawyers">
                {
                  <figure className="blog-thumb">
                    <img
                      src={require("../../assets/img/icons/Qatar.png")}
                      alt="" width="50%"
                    />
                  </figure>
                }
                <div className="blog-content">
                  <h5>Qatar</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className={"col-md-6 col-lg-4"}>
            <div className="blog-item">
              <Link to="/BookCountryLawyers">
                {
                  <figure className="blog-thumb">
                    <img
                      src={require("../../assets/img/icons/Bahrain.png")}
                      alt="" width="50%"
                    />
                  </figure>
                }
                <div className="blog-content">
                  <h5>Bahrain</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className={"col-md-6 col-lg-4"}>
            <div className="blog-item">
              <Link to="/BookCountryLawyers">
                {
                  <figure className="blog-thumb">
                    <img
                      src={require("../../assets/img/icons/Oman.png")}
                       alt="" width="50%"
                    />
                  </figure>
                }
                <div className="blog-content">
                  <h5>Oman</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCountry;
