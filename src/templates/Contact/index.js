import React from "react";
import From from "./From";
import ContactInfo from "./ContactInfo";
import { NavLink } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className={"contact-page-area-wrapper sp-y"}>
      <div className="container mt-4 mb-3">
        <div className="contact-content-wrap">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-area contact-method">
                <h3>Send us a Message</h3>
                <p>
                  Proident sunt culpa officia deserunt mollit animd laborum
                  perspicia natus error voluptatem qui acusantium doloremque
                  laudan.
                </p>
                <From />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-information contact-method">
                <div className="contact-info-con">
                  <h3>Our Location</h3>
                  <p>
                    Miventore veritatis et quasi architecto beatae vitae dicta
                    sunt nemo enim consequuntur magni dolores eos.
                  </p>
                  <div className="phoneInfo mb-4">
                    <h4 style={{ color: "white" }}>PHONE</h4>
                    <p>Appointments 1-258-987-000</p>
                    <p>Free Helpline 1-258-987-007</p>
                  </div>

                  <div className="EmailInfo mb-4">
                    <h4 style={{ color: "white" }}>EMAIL</h4>
                    <NavLink to="/" style={{ color: "white" }}>
                      <p>support@the-law-firm.org</p>
                    </NavLink>
                  </div>

                  <div className="AddressInfo mb-4">
                    <h4 style={{ color: "white" }}>ADDRESS</h4>
                    <NavLink to="/" style={{ color: "white" }}>
                      <p>
                        15 Pills Avenue, Southern Street, Camron, Florida 33069
                        - USA
                      </p>
                    </NavLink>
                  </div>
                  <div className="WorkHourInfo mb-4">
                    <h4 style={{ color: "white" }}>WORK HOURS</h4>
                    <NavLink to="/" style={{ color: "white" }}>
                      <p>Mon to Fri : 09:30 am - 18:30 pm</p>
                      <p>Sat : 09:30 am - 16:00 pm</p>
                    </NavLink>
                  </div>
                  <ContactInfo address="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ContactPage;
