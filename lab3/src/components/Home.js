import React from "react";

import CafeInfo from "./CafeInfo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Search from "./Search";

import Map from "./map";



import "leaflet/dist/leaflet.css";

//import array of "items" contained in data/data.js
import { items } from "../data/data";


function App() {
  return (
    <Row>
      <Col>
        <h2>Who are we... </h2>
        <CafeInfo />
      </Col>

      <Col>
        <div>
          <h2>Where are we... </h2>
          <Map />
        </div>
      </Col>

      <Col>
        <div>
          <h2>Explore menu</h2>
          <Search details={items} />
        </div>
      </Col>
    </Row>
  );
}
export default App;
