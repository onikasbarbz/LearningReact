import { useState } from "react";
import "./App.css";
import Hello from "./hello";
import Third from "./third";
import YearlyCalendar from "./YearlyCalendar";
import Aries from "./aries";
import Horoscope from "./Horoscope";
import PostForm from "./PostForm";
import CardDisplay from "./CardDisplay";
// import Third from "./third";
// import Quiz from "./Quiz";
// import Polysure from "./polysure";
// import LogOnMount from "./LogonMount";
// import Timer from "./Timer";
// import DynamicTitle from "./DynamicTitle";
// import ColorGenerate from "./ColorGenerate";
// import Card from "./card";
// import Calculator from "./calculator";
// import Todo from "./todo";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// const FirstName = "Luniva";
// const LastName ="Shrestha";

const App = () => {
  // const [formData, setFormData] = useState({});
  // // Function to handle form submission
  // const handleFormSubmit = (data) => {
  //   setFormData(data);
  // };

  return (
    <div>
      <CardDisplay/>
      {/* <Horoscope/> */}
      {/* <Aries/> */}
      {/* <Horoscope/> */}
      {/* <YearlyCalendar /> */}
      {/* <Hello onSubmit={handleFormSubmit} />
      <Third
        FullName={formData.fname}
        Contact={formData.contact}
        Subject={formData.subject}
        Message={formData.message}
      /> */}
      {/* <Third FirstName={FirstName} LastName={LastName}/>
      <Third FirstName={"lasata"} LastName={"maharjan"}/>
      <Third FirstName={"Samuel"} LastName={"Bajracharya"}/> */}
      {/* <Hello/> */}
      {/* <Polysure/> */}
      {/* <Quiz/> */}
      {/* // <LogOnMount/>
      // <Timer />
      // <DynamicTitle /> */}
    </div>
    //   <Router>
    //     <div>
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to="/calculator">Calculator</Link>
    //           </li>
    //           <li>
    //             <Link to="/card">Card</Link>
    //           </li>
    //           <li>
    //             <Link to="/todo">Todo</Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <Routes>
    //         <Route path="/calculator" element={<Calculator />} />
    //         <Route path="/card" element={<Card />} />
    //         <Route path="/todo" element={<Todo />} />
    //       </Routes>
    //     </div>
    //   </Router>
  );
};
export default App;
