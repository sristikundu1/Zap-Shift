import React from "react";
import Banner from "./componenets/Banner";
import HowItWorks from "./componenets/HowItWorks";
import Services from "./componenets/Services";
import SalesLogo from "./componenets/SalesLogo";
import UniqueServices from "./componenets/UniqueServices";
import BecomeMarchant from "./componenets/BecomeMarchant";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <SalesLogo></SalesLogo>
      <UniqueServices></UniqueServices>
      <BecomeMarchant></BecomeMarchant>
    </div>
  );
};

export default Home;
