import React from "react";
import axios from "axios";

export const NavBar = () => {
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    console.log("Token:", token);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://127.0.0.1:8000/api/logout", null, config)
      .then((response) => {
        console.log("Logged out successfully");
        localStorage.removeItem("token");
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="sm:mx-4 h-14 rounded-xl m-4 font-titles p-4 flex justify-between max-w-screen-xl lg:mx-auto items-center navbar bg-transparent border-2 border-gray-700">
      <a
        href="/"
        className="flex text-white items-center gap-3 hover:bg-gray-700 hover:text-black p-2 rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.995 4.097A2.25 2.25 0 0 0 17.75 2H6.25l-.154.005A2.25 2.25 0 0 0 4 4.251v15.498l.005.154A2.25 2.25 0 0 0 6.25 22h7.568l-1.5-1.5H6.25l-.102-.007a.75.75 0 0 1-.648-.743V4.251l.007-.102a.75.75 0 0 1 .743-.648h11.5l.102.007a.75.75 0 0 1 .648.743v11.567l1.159-1.159c.106-.106.22-.2.34-.28V4.25zm-3.707 17.902a.692.692 0 0 1-.076 0a.75.75 0 0 1-.493-.219l-2.5-2.502a.75.75 0 0 1 1.062-1.06l1.969 1.971l4.47-4.47a.75.75 0 1 1 1.06 1.061l-5 5a.75.75 0 0 1-.492.219M13.84 16.5a2.316 2.316 0 0 0-.182 0h-2.413a.75.75 0 0 1 0-1.5h5.004a.75.75 0 1 1 0 1.5zM9 7.752a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1.496-.002a.75.75 0 0 1 .75-.75h5.004a.75.75 0 1 1 0 1.5h-5.004a.75.75 0 0 1-.75-.75m.75 3.25a.75.75 0 0 0 0 1.5h5.004a.75.75 0 1 0 0-1.5zM8 12.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2.998a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
          />
        </svg>
        <button className=" text-xl">Taskify</button>
      </a>
      <a
        className="flex text-white items-center gap-3 hover:bg-gray-700 hover:text-black p-2 rounded-xl"
        onClick={handleLogout}
      >
        <button className=" text-xl">Logout</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
          />
        </svg>
      </a>
    </div>
  );
};
