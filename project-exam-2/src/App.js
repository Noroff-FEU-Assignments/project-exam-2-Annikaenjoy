import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/kontakt" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
