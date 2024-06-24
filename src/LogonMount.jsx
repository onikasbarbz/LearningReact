import React, { useEffect } from "react";

function LogOnMount() {
  useEffect(() => {
    console.log("Component has mounted!");
  }, []); // Empty array means this effect runs only on mount and unmount
  return <h1>Welcome to the page!</h1>;
}
export default LogOnMount;