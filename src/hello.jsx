import React,{useState}from "react";
import "./style.css";

const Hello = () => {
  const [pi,setPi]= useState(3.14);
  return (
      <form className="studentDetails">
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
              ></input>{" "}
              <input
                type="text"
                name="Contact"
                id="Contact"
                placeholder="Email"
              ></input>
          <br />
          <label htmlFor="subject">Subject: </label>
          <br />
          <input
            type="text"
            name="subject"
            id="Subject"
            placeholder="Subject"
          ></input>
          <br />
          <label htmlFor="message">Message: </label>
          <br />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <br />
          <button type="submit">Send Message</button>
        </div>

        <div className="image">
        <img src = "https://images.squarespace-cdn.com/content/v1/58e0024e725e250f971df7f2/1497933572354-JUJM8WPYNG24TD5YKTWJ/family" alt="background"/></div>
        <div className="value">
          <label htmlFor="value">The value of pi is: {pi}</label>
        </div>
      </form>
      
  );
};
export default Hello;
