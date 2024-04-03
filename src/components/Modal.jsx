import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from 'axios';

export const Component = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
  
      const response = await axios.post("http://127.0.0.1:8000/api/tasks/", {
        title,
        description
      }, config);
      
      console.log("Task created:", response.data);
      
      // Update tasks state with the newly created task
      setTasks(prevTasks => [...prevTasks, response.data.task]);
  
      //Reset inputs And Close Modal
      onCloseModal();
  
      // Update tasks after adding the new task
      updateTasks();
    } catch (error) {
      console.error("Error creating task:", error);
      setError("Failed to create task. Please try again.");
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
        className="bg-blue-500 hover:bg-blue-700 text-4xl text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setOpenModal(true)}
      >
        +
      </button>{" "}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Create A New Task !
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Task Title" />
              </div>
              <TextInput
                id="title"
                type="text"
                value={title}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-full">
              <Button onClick={handleSubmit}>Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
