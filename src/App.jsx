import "./App.css";
import LoginPage from "./pages/Auth/Login/LoginPage"
import RegisterPage from "./pages/Auth/Register/RegisterPage"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPasswordNotificationPage"
import ResetPassword from "./pages/Auth/ForgotPassword/ForgotPasswordPage"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrieren" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
