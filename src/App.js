import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./Components/Menu/Menu.js";

import Content from "./Components/Content/Content.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import Projects from "./Components/Projects/Projects.js";
function App() {
  return (
    <div
      className=" App d-flex align-items-center bg-dark
  "
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Content />} />
            <Route path="Home" element={<Content />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="About" element={<About />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
