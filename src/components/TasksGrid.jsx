import { TaskCard } from "./TaskCard";

export const TasksGrid = () => {
  return (
    <div className="mx-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="flex flex-col gap-4">
        <div className="bg-gray-400 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black text-center font-semibold font-titles">
            TO DO
          </h2>
        </div>
        <div className="p-8 bg-gray-400 rounded-lg shadow-lg flex flex-col gap-2">
          <TaskCard color="bg-purple-950"/>
          <TaskCard color="bg-purple-950"/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-400 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black text-center font-semibold font-titles">
            DOING
          </h2>
        </div>
        <div className="bg-gray-400 p-8 rounded-lg shadow-lg flex flex-col gap-2">
          <TaskCard color="bg-blue-950"/>
          <TaskCard color="bg-blue-950"/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-400 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl text-black text-center font-semibold font-titles">
            DONE
          </h2>
        </div>
        <div className="bg-gray-400 p-8 rounded-lg shadow-lg flex flex-col gap-2">
          <TaskCard color="bg-green-950"/>
          <TaskCard color="bg-green-950"/>
        </div>
      </div>
    </div>
  );
};
