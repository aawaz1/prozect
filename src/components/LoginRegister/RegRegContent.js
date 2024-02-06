import React, { Fragment } from "react";
import socialNetworks from "../../data/SocialNetworks/socials";

const RegRegContent = () => {
  return (
    <Fragment>
      <div className="off-canvas-item">
        <div className="log-in-content-wrap">
          <h2>Register</h2>
          <div className="login-form mtn-15">
            <form action="#" method="post">
              <div className="form-input-item">
                <label htmlFor="userfirstname" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  id="userfirstname"
                  placeholder="userfirstname"
                  required
                />
              </div>
              <div className="form-input-item">
                <label htmlFor="userlastname" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  id="userlastname"
                  placeholder="userlastname"
                  required
                />
              </div>
              <div className="form-input-item">
                <label htmlFor="useremail" className="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  id="useremail"
                  placeholder="useremail"
                  required
                />
              </div>
              <div className="form-input-item">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="password"
                  required
                />
              </div>

              <div className="form-input-item">
                <label htmlFor="confirmpassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  placeholder="confirmPassword"
                  required
                />
              </div>

              <div className="form-input-item">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="sign-up-notification">
            <p>
              Already acooutn? <a href="/LoginRegContent">Login Now.</a>
            </p>
          </div>
        </div>
      </div>

      <div className="off-canvas-item mt-sm-30">
        <div className="social-icons">
          {socialNetworks.map((social) => (
            <a
              key={social.id}
              href={`https://${social.networkName}.com/${social.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa fa-${social.networkName}`} />
            </a>
          ))}
        </div>
        <div className="copyright-content">
          <p> © Businex {new Date().getFullYear()} All Right Reserved.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default RegRegContent;
