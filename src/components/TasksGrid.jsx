import { TaskCard } from "./TaskCard";

export const TasksGrid = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white text-center font-semibold font-titles">
            TO DO
          </h2>
        </div>
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg flex flex-col gap-2">
          <TaskCard color="bg-gray-800"/>
          <TaskCard color="bg-gray-800"/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white text-center font-semibold font-titles">
            DOING
          </h2>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-2">
          <TaskCard color="bg-gray-800"/>
          <TaskCard color="bg-gray-800"/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white text-center font-semibold font-titles">
            DONE
          </h2>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-2">
          <TaskCard color="bg-gray-800"/>
          <TaskCard color="bg-gray-800"/>
        </div>
      </div>
    </div>
  );
};
