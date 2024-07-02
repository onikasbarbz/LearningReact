import React, { useState } from "react";
import axios from "axios";
const PostForm = () => {
  const [ShowData, setShowData] = useState({});
  const [GetData, setGetData] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState("");
  const [formData, setFormData] = useState({
    id: 0,
    date: "",
    description: "",
    luckyNumber: "",
    luckyColor: "",
    remedy: "",
    healthRating: "",
    wealthRating: "",
    familyRating: "",
    loveMattersRating: "",
    occupationRating: "",
    marriedLifeRating: "",
  });
  const handleDelete = (e) => {
    setDeleted(e.target.value);
  };
  const Delete = async () => {
    try {
      const response = await axios.delete(
        `https://aligned.corvo.com.np/api/aries/${deleted}`
      );
      alert("Deleted successfully.");
    } catch (error) {
      console.log("error while deleting: ", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };
  const handleTodayChange = (e) => {
    setGetData(e.target.value);
  };
  const TodayDate = async (e) => {
    try {
      const response = await axios.get(
        `https://aligned.corvo.com.np/api/aries/${GetData}`
      );
      console.log(response.data);
      setShowData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      const selectedDate = new Date(formData.date);
      //  const isoDateString = selectedDate.toISOString();
      const formObjectToSend = {
        id: 0,
        // date: isoDateString,
        description: formData.description,
        luckyNumber: formData.luckyNumber,
        luckyColor: formData.luckyColor,
        remedy: formData.remedy,
        healthRating: formData.healthRating,
        wealthRating: formData.wealthRating,
        familyRating: formData.familyRating,
        loveMattersRating: formData.loveMattersRating,
        occupationRating: formData.occupationRating,
        marriedLifeRating: formData.marriedLifeRating,
      };
      console.log("At the time of submit: ", JSON.stringify(formObjectToSend));

      setLoading(true);
      const response = await axios.post(
        "https://aligned.corvo.com.np/api/aries",
        JSON.stringify(formObjectToSend),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log("Form data to send: ", formDataToSend);
      console.log("Response:", response.data);
      if (response.status === 201) {
        // Success
        alert("Horoscope added successfully!");
        // setTimeout(() => {
        //   navigate("/");
        // }, 2000);
      } else {
        // Display an error message
        alert("Failed to add Horoscope data. Please try again.");
      }
      // Add any additional logic you need after a successful submission
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form id="Post" onSubmit={handleSubmit}>
        <label htmlFor="GetDate"> Get horoscope of date:</label>
        <input
          type="date"
          name="GetDate"
          value={GetData}
          onChange={handleTodayChange}
        ></input>
        <button onClick={TodayDate}>Get Data</button>

        <br />
        <div>
          <h2>Date: {ShowData.date}</h2>
          <p>Description: {ShowData.description}</p>
          <p>Lucky Number: {ShowData.luckyNumber}</p>
          <p>Lucky Color: {ShowData.luckyColor}</p>
          <p>Remedy: {ShowData.remedy}</p>
          <p>Health Rating: {ShowData.healthRating}</p>
          <p>Wealth Rating: {ShowData.wealthRating}</p>
          <p>Family Rating: {ShowData.familyRating}</p>
          <p>Love Matters Rating: {ShowData.loveMattersRating}</p>
          <p>Occupation Rating: {ShowData.occupationRating}</p>
          <p>Married Life Rating: {ShowData.marriedLifeRating}</p>
        </div>
        <br />
        <label htmlFor="date"> Post horoscope of date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="description"> description: </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{
            margin: "0 auto ",
            maxWidth: "280px",
            minHeight: "25px",
            maxHeight: "300px",
            minWidth: "280px",
          }}
        />
        <br />
        <label htmlFor="luckyNumber">LuckyNumber:</label>
        <input
          type="text"
          name="luckyNumber"
          value={formData.luckyNumber}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="luckyColor">LuckyColor:</label>
        <input
          type="text"
          name="luckyColor"
          value={formData.luckyColor}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="remedy">remedy:</label>
        <input
          type="text"
          name="remedy"
          value={formData.remedy}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="healthRating">healthRating:</label>
        <input
          type="text"
          name="healthRating"
          value={formData.healthRating}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="wealthRating">wealthRating:</label>
        <input
          type="text"
          name="wealthRating"
          value={formData.wealthRating}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="familyRating">familyRating:</label>
        <input
          type="text"
          name="familyRating"
          value={formData.familyRating}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="loveMattersRating">loveMattersRating:</label>
        <input
          type="text"
          name="loveMattersRating"
          value={formData.loveMattersRating}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="occupationRating">occupationRating:</label>
        <input
          type="text"
          name="occupationRating"
          value={formData.occupationRating}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="marriedLifeRating">marriedLifeRating:</label>
        <input
          type="text"
          name="marriedLifeRating"
          value={formData.marriedLifeRating}
          onChange={handleChange}
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? <>Submitting...</> : "Submit"}
        </button>
        <label htmlFor="deleted"> Delete data:</label>
        <input
          type="text"
          name="delete"
          value={deleted}
          onChange={handleDelete}
        ></input>
        <button onClick={Delete}> Delete</button>
      </form>
    </div>
  );
};

export default PostForm;
