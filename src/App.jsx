import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <NavBar />
     <SideBar />
     {/* <Footer /> */}
    </>
  );
}

export default App;
