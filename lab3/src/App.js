import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import Home from "./components/Home";
import People from "./components/People";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import Person from "./components/Person";
import { staff } from "./data/staff";
import Placeholder from "./components/Placeholder"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<People staff={staff} />}>
            <Route path=":personId" element={<Person staff={staff} />} />
          </Route>

          <Route path="placeholder" element={<Placeholder />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
