"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export const Component = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setTitle("");
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
              <TextInput id="title" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <TextInput id="description" type="text" required />
            </div>
            <div className="w-full">
              <Button>Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
