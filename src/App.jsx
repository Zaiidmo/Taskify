import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <NavBar />
     <Login />
    </>
  );
}

export default App;
