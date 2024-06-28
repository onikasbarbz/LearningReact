import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const LeftButton = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#3a3a3a",
          position: "relative",
          color: "white",
          border: "none",
          left: "17px",
          top: "17px",
          transform: "scale(2.38)",
          height: "24px",
          borderRadius: "50%",
        }}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};
export const RightButton = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#3a3a3a",
          position: "relative",
          color: "white",
          border: "none",
          left: "17px",
          top: "17px",
          transform: "scale(2.38)",
          height: "24px",
          borderRadius: "50%",
        }}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
