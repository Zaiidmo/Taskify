import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export const Home = () => {
  return (
    <>
    <NavBar />
    <SideBar />
      <div className="ml-80 h-screen">
        <h1 className="font-revolution text-8xl text-center text-gray-300"> My Tasks </h1>
      </div>
    <Footer />
    </>
  );
};
