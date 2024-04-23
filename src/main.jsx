import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./index.css";

// Function to check if the user is logged in
const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token; // Convert token presence to a boolean value
};

// Custom route component to protect routes
const ProtectedRoute = ({ element, ...rest }) => {
  return isLoggedIn() ? element : <Navigate to="/login" />;
};

// Custom route component to prevent access to login and register routes if already logged in
const AuthRoute = ({ element, ...rest }) => {
  return isLoggedIn() ? <Navigate to="/" /> : element;
};

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute element={<App />} />}
        />
        <Route
          path="/login"
          element={<AuthRoute element={<Login />} />}
        />
        <Route
          path="/register"
          element={<AuthRoute element={<Register />} />}
        />
      </Routes>
    </BrowserRouter>
);
