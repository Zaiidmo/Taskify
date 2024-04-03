import React from "react";
import axios from "axios";
import { EditModal } from "./EditModal";

export const TaskCard = ({
  border,
  title,
  description,
  taskId,
  status,
  updateTasks,
}) => {
  // Make Task Done
  const makeDone = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No Token Found");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
        `http://127.0.0.1:8000/api/tasks/${taskId}/done/`,
        {},
        config
      );

      // Call the updateTasks function passed from the parent component to update tasks immediately
      updateTasks();
    } catch (error) {
      console.error("Error Making Task Done:: ", error);
    }
  };
  const makeitToDo = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No Token Found");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
        `http://127.0.0.1:8000/api/tasks/${taskId}/todo/`,
        {},
        config
      );

      // Call the updateTasks function passed from the parent component to update tasks immediately
      updateTasks();
    } catch (error) {
      console.error("Error Making Task Done:: ", error);
    }
  };
  const makeitDoing = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No Token Found");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
        `http://127.0.0.1:8000/api/tasks/${taskId}/doing/`,
        {},
        config
      );

      // Call the updateTasks function passed from the parent component to update tasks immediately
      updateTasks();
    } catch (error) {
      console.error("Error Making Task Done:: ", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No Token Found for Delete!");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`, config);
      // Call the updateTasks function passed from the parent component to update tasks immediately
      updateTasks();
    } catch (error) {
      alert("Failed to delete task");
      console.error("Delete Error:: ", error);
    }
  };

  return (
    <div
      className={`${border} bg-gray-800 border border-white p-4 font-poppins rounded-lg shadow-lg`}
    >
      <div className="flex justify-between text-white">
        <h2 className="text-2xl  font-semibold">{title}</h2>
        <button
          onClick={() => deleteTask(taskId)}
          className="hover:text-red-600 m-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 14 14"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-white">{description}</p>
      <div className="flex justify-between mt-4  text-white">
        <EditModal
          task={taskId}
        />{" "}
        <div className="flex justify-end gap-1">
          {status === "To Do" ? (
            <></>
          ) : (
            <button
              onClick={() => makeitToDo(taskId)}
              className="hover:text-purple-600 m-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13 6a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5V.75a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 13 6M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          {status === "Doing" ? (
            <></>
          ) : (
            <button
              onClick={() => makeitDoing(taskId)}
              className="hover:text-purple-600 m-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="4" cy="4" r="1" transform="rotate(90 4 4)" />
                  <circle cx="12" cy="4" r="1" transform="rotate(90 12 4)" />
                  <circle cx="20" cy="4" r="1" transform="rotate(90 20 4)" />
                  <circle cx="4" cy="12" r="1" transform="rotate(90 4 12)" />
                  <circle cx="12" cy="12" r="1" transform="rotate(90 12 12)" />
                  <circle cx="20" cy="12" r="1" transform="rotate(90 20 12)" />
                  <circle cx="4" cy="20" r="1" transform="rotate(90 4 20)" />
                  <circle cx="12" cy="20" r="1" transform="rotate(90 12 20)" />
                  <circle cx="20" cy="20" r="1" transform="rotate(90 20 20)" />
                </g>
              </svg>
            </button>
          )}
          {status === "Done" ? (
            <></>
          ) : (
            <button
              onClick={() => makeDone(taskId)}
              className="hover:text-green-800 m-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
