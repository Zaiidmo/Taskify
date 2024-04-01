import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <NavBar />
     {/* <Login /> */}
     <Register />
    </>
  );
}

export default App;
