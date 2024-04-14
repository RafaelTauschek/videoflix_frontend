import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import ViteReactApp from "./pages/ViteReactApp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ViteReactApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
