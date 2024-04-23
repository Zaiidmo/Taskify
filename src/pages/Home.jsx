import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Component } from "../components/Modal";
import { TasksGrid } from "../components/TasksGrid";

export const Home = () => {
const [tasks, setTasks] = useState([]);
const updateTasks = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No Token Found');
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get("http://127.0.0.1:8000/api/tasks/", config);
    setTasks(response.data);
  } catch (error) {
    console.error("Error Fetching Data:: ", error);
  }
};

useEffect(() => {  
  updateTasks();
}, []);


  return (
    tasks && <>
      <NavBar />
      {/* <SideBar /> */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="font-revolution text-8xl text-center text-gray-300">
            {" "}
            My Tasks
          </h1>
          <Component setTasks={setTasks} updateTasks={updateTasks} />
        </div>
        <TasksGrid tasks={tasks} updateTasks={updateTasks} />
      </div>
      <Footer />
    </>
  );
};
