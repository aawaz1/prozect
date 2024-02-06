import React from "react";
import AppointmentForm from "../Contact/AppointmentForm";
import AppointmentCountry from "../Contact/AppointmentCountry";

const AppointmentCountryDetail = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="contact-content-wrap">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-10">
              <div className="contact-form-area contact-method">
                <h4 className="text-center">Select Our Country </h4>
                <AppointmentCountry/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCountryDetail;
