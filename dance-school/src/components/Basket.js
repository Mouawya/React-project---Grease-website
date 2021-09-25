import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Basket = () => {
  const [ticket, setTicket] = useState(0);
  const [price, setPrice] = useState(0);
  const { title } = useParams();
  const removeTicket = () => {
    console.log(ticket);
    if (ticket > 0) {
      setTicket(ticket - 1);
      setPrice(price - 15);
    }
  };

  const addTicket = () => {
    setTicket(ticket + 1);
    setPrice(price + 15);
  };

  return (
    <div className="basket-container">
      <table className="basket-table">
        <thead>
          <tr className="table-header">
            <th>Type</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="title">{title}</td>
            <td className="price">{price} €</td>
            <td className="amount">
              <button onClick={removeTicket}>-</button>
              <span>{ticket}</span>
              <button onClick={addTicket}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout-details">
        <p>Total: {price} €</p>
        {price > 0 && (
          <Link to={`/payment/${price}`}>
            <button className="check-out-btn" price={price}>
              Check out
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Basket;
