import "./App.css";
import LoginPage from "./pages/Auth/Login/LoginPage"
import RegisterPage from "./pages/Auth/Register/RegisterPage"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPasswordNotificationPage"
import EmailForForgetPassword from "./pages/Auth/ForgotPassword/ForgotPasswordAddEmailPage";
import ResetPassword from "./pages/Auth/ForgotPassword/ForgotPasswordPage"
import SendEmailNotificationPage from "./pages/Auth/Register/SendEmailNotificationPage";
import MainPage from "./pages/Home/MainPage";

import { Routes, Route } from "react-router-dom";

function App() {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrieren" element={<RegisterPage />} />
        <Route path="/email-notification" element={<SendEmailNotificationPage />} />
        <Route path="/forgotPassword" element={<EmailForForgetPassword />} />
        <Route path="/forgot-password-notification" element={<ForgotPassword />} />
        <Route path="/forgot-password-reset/:uid/:token" element={<ResetPassword />} />
        <Route path="/main" element={<MainPage videos={videos}/>}/>
      </Routes>
    </>
  );
}

export default App;
