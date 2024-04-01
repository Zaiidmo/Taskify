import React from "react";
const Register = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="h-fit">
        <h3 className="font-titles">Get Started Now</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="User Name" id="username" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="login-btn">Register</button>

        <label>
          Already have an account? <br />
          <a className="text-blue-600" href="#">
            Login now
          </a>
        </label>
      </form>
    </>
  );
};

export default Register;