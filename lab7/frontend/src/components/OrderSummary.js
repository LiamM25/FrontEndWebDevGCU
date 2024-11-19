import React, { useContext} from "react";
import OrderContext from "./OrderContext";

export default function OrderSummary() {
  const [order] = useContext(OrderContext);

  return (
    <div>
      <h2>Your Order</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
