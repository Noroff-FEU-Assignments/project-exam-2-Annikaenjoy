import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/HeaderImage";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const Admin = (props) => {
  return (
    <>
      <Navbar />
      <Header />
      <Heading>Våre biler</Heading>
      <Footer />
    </>
  );
};

export default Admin;
