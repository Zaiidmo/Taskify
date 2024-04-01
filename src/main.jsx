
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Navigate, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./index.css";

const isLoggedIn = false; // Initial state is not logged in

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn ? <App /> : <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: isLoggedIn ? <App /> : <Navigate to="/login" />,
  },
  {
    path: "/register",
    element: <Register />,
    // element: isLoggedIn ? <App /> : <Navigate to="/register" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


