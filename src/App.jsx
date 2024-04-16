import "./App.css";
import LoginPage from "./pages/Auth/Login/LoginPage"
import RegisterPage from "./pages/Auth/Register/RegisterPage"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPasswordPage"
import MainPage from "./pages/Home/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrieren" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </>
  );
}

export default App;
