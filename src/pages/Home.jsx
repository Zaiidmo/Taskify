import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { TasksGrid } from "../components/TasksGrid";

export const Home = () => {
  return (
    <>
    <NavBar />
    {/* <SideBar /> */}
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-revolution text-8xl text-center text-gray-300"> My Tasks</h1>
        <TasksGrid />
      </div>
    <Footer />
    </>
  );
};
