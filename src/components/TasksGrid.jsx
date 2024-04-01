export const TasksGrid = () => {
  return (
    <div className="mx-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="flex flex-col gap-4">
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl text-Black text-center font-semibold font-titles">TO DO</h2>
          </div>
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
            
          </div>
      </div>
      <div className="flex flex-col gap-4">
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl text-Black text-center font-semibold font-titles">DOING</h2>
          </div>
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
            
          </div>
      </div>
      <div className="flex flex-col gap-4">
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl text-Black text-center font-semibold font-titles">DONE</h2>
          </div>
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
            
          </div>
      </div>
    </div>
  );
};
