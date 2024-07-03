import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aligned.corvo.com.np/api/Cart"
        );
        console.log(response);
        setCartData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <h1>Cart Data</h1>
      {cartData.length > 0 ? (
        <ul>
          {cartData.map((cart) => (
            <li key={cart.cartId}>
              <h2>Cart ID: {cart.cartId}</h2>
              <p>Customer Name: {cart.customerName}</p>
              <p>Customer ID: {cart.customerID}</p>
              <p>Total: {cart.total}</p>
              <h3>Items:</h3>
              <ul>
                {cart.items.map((item) => (
                  <li key={item.id}>
                    <p>Item Name: {item.itemName}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </li>
                ))}
              </ul>
              <h3>Billing Address:</h3>
              <p>Location Name: {cart.billingAddressData.locationName}</p>
              <p>City: {cart.billingAddressData.city}</p>
              <p>Address: {cart.billingAddressData.address}</p>
              <p>Phone Number: {cart.billingAddressData.phoneNumber}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Cart;
