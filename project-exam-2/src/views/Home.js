import React from "react";

import NavBar from "../components/Navbar";
import ImgCarousel from "../components/Carousel";
import InfoColumns from "../components/InfoColumns";
import IconColumns from "../components/IconColumns";
import OurServices from "../components/Services";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <ImgCarousel />
      <InfoColumns />
      <IconColumns />
      <OurServices />
      <Footer />
    </>
  );
};

export default Home;
