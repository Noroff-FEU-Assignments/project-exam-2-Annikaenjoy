import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import LoginForm from "../components/LoginForm";

const Login = (props) => {
  return (
    <>
      <Navbar />
      <Heading>Login</Heading>

      <LoginForm />
    </>
  );
};

export default Login;
