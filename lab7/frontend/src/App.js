import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayFoodMenu from "./components/DisplayFoodMenu";




function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/order" element={<DisplayFoodMenu />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
