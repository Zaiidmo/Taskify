import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize with false

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/login", formData)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setIsLoggedIn(true);
          localStorage.setItem("token", response.data.authorization.token);
          window.location.href = "/"; 
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  
  
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3 className="font-titles">Welcome Back!</h3>

        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleChange} placeholder="Email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleChange} placeholder="Password" id="password" />

        <button type="submit" className="login-btn">Log In</button>

        <label>
          Don't Have an Account, yet? <br />
          <a className="text-orange-600" href="/register">
            Register Now
          </a>
        </label>
      </form>
    </>
  );
};

export default Login;
