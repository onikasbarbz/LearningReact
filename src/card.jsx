import React, { useState } from "react";
import "./card.css"
const Card = () => {
  const [count, setCount] = useState(7);
  function increment(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }
  return (
    <div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <label> Count :{count}</label>
    </div>
  );
};
export default Card;