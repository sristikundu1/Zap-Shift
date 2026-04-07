import React from "react";
import Banner from "./componenets/Banner";
import HowItWorks from "./componenets/HowItWorks";
import Services from "./componenets/Services";
import SalesLogo from "./componenets/SalesLogo";
import UniqueServices from "./componenets/UniqueServices";
import BecomeMarchant from "./componenets/BecomeMarchant";
import Reviews from "./componenets/Reviews";
import FAQ from "./componenets/FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <SalesLogo></SalesLogo>
      <UniqueServices></UniqueServices>
      <BecomeMarchant></BecomeMarchant>
      <Reviews></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
