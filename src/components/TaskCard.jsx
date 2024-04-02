import React from "react";
import axios from "axios";

export const TaskCard = ({ border, title, description, taskId }) => {
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
      // Update the tasks state or fetch tasks again
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
    }catch (error) {
      alert('Failed to delete task');
      console.error("Delete Error:: ", error);
    }
  };

  return (
    <div
      className={`${border} bg-gray-800 border border-white p-4 font-poppins rounded-lg shadow-lg`}
    >
      <div className="flex justify-between text-white">
        <h2 className="text-2xl  font-semibold">{title}</h2>
        <button onClick = {() => deleteTask(taskId)} className="hover:text-red-600 m-0">
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
      <p className="text-white">{description} </p>
      <div className="flex justify-between mt-4  text-white">
        <button className="hover:text-black m-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1l1-4Z" />
            </g>
          </svg>
        </button>
        <div className="flex justify-end gap-1">
          <button className="hover:text-purple-600 m-0">
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
          <button className="hover:text-blue-800 m-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M4 16h4v4H4V16z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin=".2"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M10 16h4v4h-4V16z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin=".4"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M16 16h4v4h-4V16z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin=".6"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M4 10h4v4H4V10z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin=".8"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M10 10h4v4h-4V10z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin="1"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M16 10h4v4h-4V10z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin="1.2"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M4 4h4v4H4V4z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin="1.4"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M10 4h4v4h-4V4z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin="1.6"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
              <path fill="currentColor" d="M16 4h4v4h-4V4z" className="st0">
                <animate
                  fill="remove"
                  accumulate="none"
                  additive="replace"
                  attributeName="opacity"
                  begin="1.8"
                  calcMode="linear"
                  dur="3s"
                  keyTimes="0;0.9;1"
                  repeatCount="indefinite"
                  restart="always"
                  values="1;0;0"
                />
              </path>
            </svg>
          </button>
          <button onClick={() => makeDone(taskId)}  className="hover:text-green-800 m-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
