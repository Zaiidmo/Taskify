import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Navigate, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./index.css";

const isLoggedIn = localStorage.getItem("token") !== null; 
const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn ? <App /> : <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: isLoggedIn ? <App /> : <Login />,
  },
  {
    path: "/register",
    element: isLoggedIn ? <App /> : <Register />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
