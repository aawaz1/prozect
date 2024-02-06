import React from "react";
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import socialNetworks from "../../data/SocialNetworks/socials";

function Footer() {
  return (
    <footer className="footer-area sp-bottom">
      <div className="container">
        <div className="row mtn-40">
          <div className="col-lg-4 order-4 order-lg-0">
            <div className="widget-item">
              <div className="about-widget">
                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                  <img src={Logo} alt="Logo" />
                </Link>

                <Text >
                  During the summer my wife and I got to go on an amazing road
                  trip in Vancouver.
                </Text>
                <div className="member-social-icons mt-30">
                  {socialNetworks.map((social) => (
                    <a
                      key={social.id}
                      // href={`https://${social.networkName}.com/${social.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa fa-${social.networkName}`} />
                    </a>
                  ))}
                </div>

                <Text classes="copyright-txt" style={{color:"white"}}>
                  &copy; {new Date().getFullYear()} Businex Ltd. All Rights
                  Reserved.
                </Text>
              </div>
            </div>
          </div>

          {/* <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Practice Areas">
              <List classes="widget-list">
                <LI>
                  <Link to="/service/domestic-voilence?id=1">
                    REAL ESTATE LAW
                  </Link>
                </LI>
                <LI>
                  <Link to="/service/all-criminal-laws?id=2">
                    All Criminal Laws
                  </Link>
                </LI>
                <LI>
                  <Link to="/service/personal-injury?id=3">
                    Personal Injury
                  </Link>
                </LI>
                <LI>
                  <Link to="/service/corporate-issues?id=4">
                    Corporate Issues
                  </Link>
                </LI>
                <LI>
                  <Link to="/service/health-related-laws?id=5">
                    Health Related Laws
                  </Link>
                </LI>
                <LI>
                  <Link to="/service/domestic-voilence?id=6">
                    Domestic Voilence
                  </Link>
                </LI>
              </List>
            </Widget>
          </div> */}

          <div className="col-md-4 col-lg-4 ml-auto" style={{marginLeft:"8%"}}>
            <Widget title="Quick Links" >
              <List classes="widget-list">
                <LI>
                  <Link to="/about">About</Link>
                </LI>
                <LI>
                  <Link to="/Attorneys">Our Attorneys</Link>
                </LI>
                <LI>
                  <Link to="/PracticeArea-one">Practice Area</Link>
                </LI>
                <LI>
                  <Link to="/contact">Contact Us</Link>
                </LI>
                {/* <LI>
                  <Link to="/">Book Appointment</Link>
                </LI> */}
                <LI>
                  <Link to="/blog-grid-without-sidebar">Blog</Link>
                </LI>
                <LI>
                  <Link to="/blog-list-right-sidebar">Case</Link>
                </LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-3" style={{color:"white"}}>
            <Widget title="Head Office" >
              <address>
                2005 Stokes Isle Apartment. 896, Washington 10010, USA
                <br />
                <a href="(+68) 120034509" target="/blank" style={{color:"white"}}>
                  (+68) 120034509
                </a>
                <br />
                <p>
                  Mon to Fri : 09:30 am - 18:30 pm <br />
                  Sat : 09:30 am - 16:00 pm <br />
                  <a href="" target="/blank" style={{color:"white"}}>
                    support@the-law-firm.org
                  </a>
                </p>
              </address>
            </Widget>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
