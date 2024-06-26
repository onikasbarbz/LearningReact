import React from "react";
import "./Polysure.css";
import RightArrow from "./asset/right.svg";
import leftArrow from "./asset/left.svg";
import Box2 from "./asset/Box2.svg";
import Box3 from "./asset/Box3.svg";
import Box4 from "./asset/Box4.svg";
import UpArrow from "./asset/UpArrow.svg";
import Adobe from "./asset/adobe.svg";
const polysure = () => {
  return (
    <div className="box">
      <div className="rectangle" />
      <div className="navbar">
        <div className="text-wrapper">Polysure</div>
        <div className="group">
          <div className="div">
            <div className="text-wrapper-2">Insurance Products</div>
            <div className="text-wrapper-2">Renew Your Policy</div>
            <div className="text-wrapper-2">Claim</div>
            <div className="text-wrapper-2">Support</div>
            <div className="text-wrapper-2">Learn</div>
          </div>
          <div className="frame">
            <div className="text-wrapper-3">Sign In</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Get Started</div>
          </div>
        </div>
      </div>
      <div className="banner-description">
        <p className="heading">Taking care of what’s important.</p>
        <div className="description-and">
          <p className="text-wrapper">
            Start buying and managing your projects by digitally system. And
            reate a comfortable and easy collection as per your need. Protect
            yourself and your loved one.
          </p>
          <div className="frame">
            <div className="div">Start for Free</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Learn More</div>
          </div>
        </div>
      </div>
      <div className="CardsBox">
        <div className="box-arrowLeft">
          <img
            className="solar-arrow-left"
            alt="Solar arrow left"
            src={leftArrow}
          />
        </div>
        <div className="box-arrowRight">
          <img
            className="solar-arrow-right"
            alt="Solar arrow right"
            src={RightArrow}
          />
        </div>
      </div>
      <div className="Boxes">
        <div className="box2">
          <div className="card-content">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={Box2} />
              <div className="div" />
              <div className="card-text">
                <div className="individuals-family">
                  Individuals &amp; Family
                </div>
                <p className="text-wrapper">
                  We help a proper send-off and help your family keep living
                  their best life in your absence.
                </p>
              </div>
              <div className="arrow">
                <img
                  className="solar-arrow-up"
                  alt="Solar arrow up"
                  src={UpArrow}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="card-content">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={Box3} />
              <div className="div" />
              <div className="card-text">
                <div className="individuals-family">
                  Individuals &amp; Family
                </div>
                <p className="text-wrapper">
                  We help a proper send-off and help your family keep living
                  their best life in your absence.
                </p>
              </div>
              <div className="arrow">
                <img
                  className="solar-arrow-up"
                  alt="Solar arrow up"
                  src={UpArrow}
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="box4">
          <div className="card-content">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={Box4} />
              <div className="div" />
              <div className="card-text">
                <div className="individuals-family">
                  Individuals &amp; Family
                </div>
                <p className="text-wrapper">
                  We help a proper send-off and help your family keep living
                  their best life in your absence.
                </p>
              </div>
              <div className="arrow">
                <img
                  className="solar-arrow-up"
                  alt="Solar arrow up"
                  src={UpArrow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boxAdobe">
        <img className="image" alt="Image" src={Adobe} />
        <img className="image" alt="Image" src={Adobe} />
        <img className="image" alt="Image" src={Adobe} />
        <img className="image" alt="Image" src={Adobe} />
        <img className="image" alt="Image" src={Adobe} />
        <img className="image" alt="Image" src={Adobe} />
      </div>
    </div>
  );
};
export default polysure;
