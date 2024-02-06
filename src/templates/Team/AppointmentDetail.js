import React from "react";
import AppointmentForm from "../Contact/AppointmentForm";

const AppointmentDetail = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="contact-content-wrap">
          <div className="row">
            <div className="col-lg-10">
              <div className="contact-form-area contact-method">
                <h3>Book an Appointment</h3>
                <AppointmentForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentDetail;
