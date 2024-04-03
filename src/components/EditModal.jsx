import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

export const EditModal = ( task, onCloseModal ) => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState([]);

  function onCloseModal() {
    setOpenModal(false);
    setTitle("");
    setDescription("");
    setError("");
  }
  async function handleSubmit() {
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

      // console.log(task.task);
      const response = await axios.put(
        `http://127.0.0.1:8000/api/tasks/${task.task}/`,
        {
          title,
          description,
        },
        config
      );

      console.log("Task Updated:", response.data);

      // Reset inputs And Close Modal
      onCloseModal();

      // Update tasks after updating the task
      updateTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      setError("Failed to update task. Please try again.");
    }
  }

  const updateTasks = async () => {
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

      const response = await axios.get("http://127.0.0.1:8000/api/tasks/", config);
      setTasks(response.data);
    } catch (error) {
      console.error("Error updating tasks:", error);
    }
  }
  
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="hover:text-black m-0"
      >
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
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Edit Your Task !
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Task Title" />
              </div>
              <TextInput
                id="title"
                type="text"
                value={task.title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <TextInput
                id="description"
                type="text"
                value={task.description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-full">
              <Button onClick={handleSubmit}>Update</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
