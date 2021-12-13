import "./App.css";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import ObjectiveBrowser from "./Components/ObjectiveBrowser";
import InstructorView from "./Components/InstructorView";
import StudentView from "./Components/StudentView";
import Login from "./Components/Login/Login";
import useToken from "./hooks/useToken";

function App() {
  const { token, setToken } = useToken();

  useEffect(() => {
    setInterval(() => {
      axios('http://localhost:7865/loggedInUsers')
      .then((results) => {
        console.log('results',results);
      })
      .catch((error) => {});
    },10*1000);
  },[]);

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <h2>SPOTlight Lecture Organizer</h2>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Learning Objective Browser</Link></li>
            <li><Link to="/instructor">Instructor's View</Link></li>
            <li><Link to="/student">Student's View</Link></li>
            <li><button onClick={() => {setToken({token: null})}}>Logout</button></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/instructor" element={<InstructorView/>}></Route>
          <Route path="/student" element={<StudentView/>}></Route>
          <Route path="/" element={<ObjectiveBrowser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
