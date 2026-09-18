import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import NavBar from "./conponent/NavBar";
import { Routes, Route } from "react-router-dom";
import AddTask from "./conponent/AddTask";
import List from "./conponent/List";
import UpdateTask from "./conponent/UpdateTask";
import SignUp from "./conponent/SignUp";
import Login from "./conponent/login";
import Protected from "./conponent/Protected";



function App() {

  return (
    <div className="">
      <NavBar />
       <Routes>
        <Route path="/" element={<Protected><AddTask/></Protected>}/>
        <Route path="/list" element={<Protected><List /></Protected>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<h1>update Task</h1>}/>
        <Route path="/update/:id" element={<UpdateTask/>} />

       </Routes>
       
    </div>
  );
}

export default App;
