import React from "react";
import useFetchData from "./useFetchData";

const DisplayFoodMenu = () => {
  const {status, foods} = useFetchData();
  if (status==='fetched')
  return (
    <div>
        <h2>MENU</h2>
         <ul>
         {/* code */}
       </ul>
    </div>
  );
  return<p>There is currently an issue displaying the food menu</p>
};

export default DisplayFoodMenu;
