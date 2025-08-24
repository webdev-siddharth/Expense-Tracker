import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";



const App = () => {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;

const Root = () => {
  // check if token Exists in local storage 
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to Dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to= "/login" />
  );
};