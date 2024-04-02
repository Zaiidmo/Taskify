import React, {useState, useEffect} from "react";
import axios from 'axios';
import { TaskCard } from "./TaskCard";

export const TasksGrid = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //Fetch The Tasks
    const fetchTasks = async () => {
      try{
        //Get The Users Token 
        const token = localStorage.getItem('token');
        if (!token) {
          console.log('No Token Found');
          return;
        }

        //Set The Authorization Header With The User's Token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        //Fetch The Tasks
        const response = await axios.get("http://127.0.0.1:8000/api/tasks/", config);
        setTasks(response.data); // Update State With The fetched data
      } catch (error) {
        console.error("Error Fetching Data:: ", error);
      }
      };
    
    fetchTasks();
  }, []);

  //Filter The Tasks Based On Their Status
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
            <TaskCard key={index} color="bg-gray-800" task={task} title={task.title} description={task.description} />
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
            <TaskCard key={index} color="bg-gray-800" task={task} title={task.title} description={task.description} />
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
            <TaskCard key={index} color="bg-gray-800" task={task} title={task.title} description={task.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
