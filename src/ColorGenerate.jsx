import React, { useEffect, useState } from "react";
import "./Color.css";
const ColorGenerate = () => {
  const [BgColor, SetBgColor] = useState("Pink");
  const ColorChange = () => {
    const colors = [
      "red",
      "blue",
      "pink",
      "orange",
      "green",
      "yellow",
      "purple",
      "brown",
      "black",
    ];
    const random = colors[Math.floor(Math.random() * colors.length)];
    SetBgColor(random);
  };
  const RgbColor = () => {
    const random = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    SetBgColor(random);
  };
  const HexColor = () => {
    const random =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    SetBgColor(random);
  };
  useEffect(() => {
    console.log("The background color is: " + BgColor);
  }, [BgColor]);
  return (
    <div className="ColorContainer" style={{ backgroundColor: BgColor }}>
      <button onClick={ColorChange}> Change Color</button>
      <button onClick={RgbColor}> Change RGB color</button>
      <button onClick={HexColor}>Change HEX color</button>
      <h1> {BgColor} Color is displayed here.</h1>
    </div>
  );
};
export default ColorGenerate;
