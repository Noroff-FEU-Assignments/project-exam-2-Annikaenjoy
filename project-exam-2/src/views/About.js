import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/HeaderImage";
import Heading from "../components/Heading";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Admin = (props) => {
  return (
    <>
      <Navbar />
      <Header />
      <Heading>Om Autonext</Heading>
      <Team />
      <Footer />
    </>
  );
};

export default Admin;
