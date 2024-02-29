import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from "../templates/Team";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from "../assets/img/about.jpg";
import AttorneysGroup from "../templates/Team/AttorneysGroup";
import AttorneyChangeButton from "../components/changeButton/AttorneyChangeButton";

const Attorneys = () => {
  return (
    <Fragment>
      <Header />
     <AttorneyChangeButton/>
      {/* <BrandLogo/> */}
      <Funfact classes="sp-top" />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default Attorneys;
