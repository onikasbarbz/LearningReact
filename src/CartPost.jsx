import React, { useState, useEffect } from "react";
import axios from "axios";
const CartPost = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cartId: 0,
    customerName: "",
    customerID: "",
    total: 0,
    items: [
      {
        id: 0,
        productId: 0,
        itemName: "",
        price: 0,
        quantity: 0,
        cartId: 0,
      },
    ],
    billingAddressData: {
      billingID: 0,
      customerID: "",
      locationName: "",
      city: "",
      address: "",
      phoneNumber: "",
    },
  });
//   useEffect(() => {
//     console.log("Form data updated:", formData);
//   }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = formData.items.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setFormData({ ...formData, items: newItems });
  };
  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      billingAddressData: { ...formData.billingAddressData, [name]: value },
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formObjectToSend = {
        cartId: 0,
        customerName: formData.customerName,
        customerID: formData.customerID,
        total: formData.total,
        items: formData.items.map((item) => ({
          id: item.id,
          productId: item.productId,
          itemName: item.itemName,
          price: item.price,
          quantity: item.quantity,
          cartId: 0,
        })),

        billingAddressData: {
          billingID: formData.billingAddressData.billingID,
          customerID: formData.billingAddressData.customerID,
          locationName: formData.billingAddressData.locationName,
          city: formData.billingAddressData.city,
          address: formData.billingAddressData.address,
          phoneNumber: formData.billingAddressData.phoneNumber,
        },
      };
      const response = await axios.post(
        "https://aligned.corvo.com.np/api/Cart",
        JSON.stringify(formObjectToSend),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      if (response.status === 201) {
        alert("Data added successfully!");
      } else {
        alert("Failed to add data to cart . Plese try again.");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form id="Post" onSubmit={handleSubmit}>
        <label htmlFor="cartId">Cart Id:</label>
        <input
          type="number"
          name="cartId"
          value={formData.cartId}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="customerName"> Customer Name:</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="customerID"> Customer Id:</label>
        <input
          type="text"
          name="customerID"
          value={formData.customerID}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="total"> Total:</label>
        <input
          type="number"
          name="total"
          value={formData.total}
          onChange={handleChange}
        ></input>
        <br />
        <h2>Items:</h2>
        {formData.items.map((item, index) => (
          <div key={index}>
            <label htmlFor={`id-${index}`}>Id:</label>
            <input
              type="number"
              name="id"
              value={item.id}
              onChange={(e) => handleItemChange(index, e)}
            ></input>
            <br />
            <label htmlFor={`productId-${index}`}>ProductId:</label>
            <input
              type="number"
              name="productId"
              value={item.productId}
              onChange={(e) => handleItemChange(index, e)}
            ></input>
            <br />
            <label htmlFor={`itemName-${index}`}>Item Name:</label>
            <input
              type="text"
              name="itemName"
              value={item.itemName}
              onChange={(e) => handleItemChange(index, e)}
            />
            <br />
            <label htmlFor={`price-${index}`}>price:</label>
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={(e) => handleItemChange(index, e)}
            ></input>
            <br />
            <label htmlFor={`quantity-${index}`}>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, e)}
            ></input>
            <br />
            <label htmlFor={`cardId-${index}`}>CartId:</label>
            <input
              type="number"
              name="cartId"
              value={item.cartId}
              onChange={(e) => handleItemChange(index, e)}
            ></input>
            <br />
          </div>
        ))}
        <h2>Billing Address:</h2>
        <label htmlFor="billingID"> Billing ID:</label>
        <input
          type="number"
          name="billingID"
          value={formData.billingAddressData.billingID}
          onChange={handleBillingChange}
        ></input>
        <br />
        <label htmlFor="customerID"> Customer ID:</label>
        <input
          type="text"
          name="customerID"
          value={formData.billingAddressData.customerID}
          onChange={handleBillingChange}
        ></input>
        <br />
        <label htmlFor="locationName">Location Name:</label>
        <input
          type="text"
          name="locationName"
          value={formData.billingAddressData.locationName}
          onChange={handleBillingChange}
        ></input>
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          value={formData.billingAddressData.city}
          onChange={handleBillingChange}
        ></input>
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.billingAddressData.address}
          onChange={handleBillingChange}
        ></input>
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.billingAddressData.phoneNumber}
          onChange={handleBillingChange}
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? <>Submitting...</> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CartPost;
