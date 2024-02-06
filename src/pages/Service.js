import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from "../assets/img/about.jpg";

const PageService = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={require("../assets/img/page-header.jpg")}
        title="OUR SERVICES"
        content="Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
      />
      <PageAbout
        title={"Our Services"}
        heading="Opklim introduces
skilled lawyers to help
for all your legal needs. <br/> Proident culpa officia deserunt mollit animd laborum perspicia
natus error voluptatem qui acusantium dolore laudan."
        thumb={ServiceThumb}
        content="<b>Businex</b> Labore et dolore magna aliqu. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit kind voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatas non proident, sunt in culpa qui officia deserunt.

Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis ety quasi architecto beatae vitae dicta sunt explicabo nemo enim.

"
      />
      <Services classes="sm-top" />
      <PricingTable />
      <Testimonial />
      {/* <BrandLogo /> */}
      <Funfact classes="sp-top" />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageService;
