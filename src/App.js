import "./App.css";
import Quiz from "./Quiz";
import Polysure from "./polysure";
// import LogOnMount from "./LogonMount";
// import Timer from "./Timer";
// import DynamicTitle from "./DynamicTitle";
// import ColorGenerate from "./ColorGenerate";
// import Card from "./card";
// import Calculator from "./calculator";
// import Todo from "./todo";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Polysure/>
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
}
export default App;
