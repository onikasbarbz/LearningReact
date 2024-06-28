import React from "react";

const Third = (props) => {
  return (
    <div>
      <p>Full Name: {props.FullName}</p>
      <p>Email Address: {props.Contact}</p>
      <p>Subject: {props.Subject}</p>
      <p>Message: {props.Message}</p>
      {/* {props.FirstName}
    {props.LastName} */}
    </div>
  );
};

export default Third;
