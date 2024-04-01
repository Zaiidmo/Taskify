import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <NavBar />
     {/* <Login /> */}
     {/* <Register />  */}
     <SideBar />
     {/* <Footer /> */}
    </>
  );
}

export default App;
