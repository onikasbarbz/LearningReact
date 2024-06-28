import React, { useState } from "react";
import "./style.css";

const Hello = ({ onSubmit }) => {
  //formData to manage the form data locally
  const [formData, setFormData] = useState({
    fname: "",
    contact: "",
    subject: "",
    message: "",
  });
  // updates the state when from fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(formData);
  // to prevent the default form submission and call Onsubmit prop
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form className="studentDetails" onSubmit={handleSubmit}>
      <div className="main">
        <h2>Get in touch with us</h2>
        <div className="details">
          <label htmlFor="fname">Full Name: </label>
          <label htmlFor="Contact">Email Address: </label>
        </div>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="Name"
          value={formData.fname}
          onChange={handleChange}
        ></input>{" "}
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Email"
          value={formData.contact}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="subject">Subject: </label>
        <br />
        <input
          type="text"
          name="subject"
          id="Subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="message">Message: </label>
        <br />
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Send Message</button>
      </div>

      <div className="image">
        <img
          src="https://images.squarespace-cdn.com/content/v1/58e0024e725e250f971df7f2/1497933572354-JUJM8WPYNG24TD5YKTWJ/family"
          alt="background"
        />
      </div>
    </form>
  );
};
export default Hello;
