import React, { useState, useEffect } from "react";
import axios from 'axios';
import { TaskCard } from "./TaskCard";

export const TasksGrid = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
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

    fetchTasks();
  }, []);

  // Function to update tasks after marking a task as done
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
      console.error("Error Updating Tasks:: ", error);
    }
  };

  // Filter tasks based on their status
  const todoTasks = tasks.filter(task => task.status === "To Do");
  const doingTasks = tasks.filter(task => task.status === "Doing");
  const doneTasks = tasks.filter(task => task.status === "Done");


  return (
    <div className="mt-8 md:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Render To Do tasks */}
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white text-center font-semibold font-titles">TO DO</h2>
        </div>
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg flex flex-col gap-2">
          {todoTasks.map((task, index) => (
            <TaskCard
              key={index}
              border="border-purple-800"
              task={task}
              taskId={task.id}
              title={task.title}
              status={task.status}
              description={task.description}
              updateTasks={updateTasks} // Pass the updateTasks function
            />
          ))}
        </div>
      </div>

      {/* Render Doing tasks */}
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white text-center font-semibold font-titles">DOING</h2>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-2">
          {doingTasks.map((task, index) => (
            <TaskCard
              key={index}
              border="border-blue-800"
              task={task}
              taskId={task.id}
              title={task.title}
              status={task.status}
              description={task.description}
              updateTasks={updateTasks} // Pass the updateTasks function
            />
          ))}
        </div>
      </div>

      {/* Render Done tasks */}
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white text-center font-semibold font-titles">DONE</h2>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-2">
          {doneTasks.map((task, index) => (
            <TaskCard
              key={index}
              border="border-green-800"
              task={task}
              taskId={task.id}
              title={task.title}
              status={task.status}
              description={task.description}
              updateTasks={updateTasks} // Pass the updateTasks function
            />
          ))}
        </div>
      </div>
    </div>
  );
};
