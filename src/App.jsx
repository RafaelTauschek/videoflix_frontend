import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register"
import ViteReactApp from "./pages/ViteReactApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<ViteReactApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrieren" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
