import React, { useState } from "react";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";

const FoodOrder = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
  };
  return (
    <>
      <div className="container-fluid">
        <div>
          <h2>Menu</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id} onClick={(e) => handleClick(e, item.name)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <OrderContext.Provider value={[selectedItems, setSelectedItems]}>
          <div>
            <OrderSummary />
          </div>
          <div></div>
        </OrderContext.Provider>
      </div>
    </>
  );
};
export default FoodOrder;
