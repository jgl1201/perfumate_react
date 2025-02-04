import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, /*Link*/ } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;