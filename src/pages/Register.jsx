import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register", formData)
      .then((response) => {
        console.log("Registration successful:", response.data);
      })
      .catch((error) => {
        console.log("Registration error:", error.response.data);
      });
  };
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="h-fit" onSubmit={handleSubmit}>
        <h3 className="font-titles">Get Started Now</h3>

        <label htmlFor="name">Username</label>
        <input
          type="text"
          placeholder="User Name"
          name="name"
          onChange={handleChange}
          id="name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          id="password"
        />

        <button className="login-btn" type="submit">
          Register
        </button>

        <label>
          Already have an account? <br />
          <a className="text-blue-600" href="/login">
            Login now
          </a>
        </label>
      </form>
    </>
  );
};

export default Register;
