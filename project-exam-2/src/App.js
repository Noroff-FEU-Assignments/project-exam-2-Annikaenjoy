import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import OurCars from "./views/OurCars";
import Order from "./views/Order";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Admin from "./views/Admin";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/omoss" element={<About />}></Route>
          <Route exact path="/tjenester" element={<Services />}></Route>
          <Route exact path="/biler" element={<OurCars />}></Route>
          <Route exact path="/bestilling" element={<Order />}></Route>
          <Route exact path="/kontakt" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
