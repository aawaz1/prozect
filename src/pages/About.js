import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";
import WhoWeAreSection from '../components/WhoWeAre/whoweare';

import ServiceThumb from "../assets/img/about.jpg";
import HomeOnechangeButton from "../components/changeButton/home-one-changeButton";
import HomeTwochangeButton from "../components/changeButton/homeTwoChnageButton";

const PageAbout = () => {
  return (
    <Fragment>
     
      <Header />
      <HomeTwochangeButton/>
     
      
      {/* <About
        title={"Our Team"}
        heading="Meet Our <br/> Expert Member"
        thumb={ServiceThumb}
        content="<b>Law</b> is an instrument which regulates human conduct/behavior. Law means Justice, Morality, Reason, Order, and Righteous from the view point of the society"
      /> */}
      {/* <Services /> */}
      <Features classes={"sm-top"} />
      {/* <WhoWeAreSection /> */}
      <Testimonial />
      {/* <Team /> */}
      {/* <BrandLogo /> */}
      <Funfact classes="sp-top" />
      <CallToAction />

      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageAbout;
