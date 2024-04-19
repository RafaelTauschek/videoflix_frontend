import "./App.css";
import React, { useState, useEffect } from "react";
import LoginPage from "./pages/Auth/Login/LoginPage"
import RegisterPage from "./pages/Auth/Register/RegisterPage"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPasswordNotificationPage"
import ResetPassword from "./pages/Auth/ForgotPassword/ForgotPasswordPage"
import SendEmailNotificationPage from "./pages/Auth/Register/SendEmailNotificationPage";
import MainPage from "./pages/Home/MainPage";
import { Routes, Route } from "react-router-dom";
import { get } from "./services/http";

function App() {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [videos, setVideos] = useState([])

  useEffect(() => {
    get(BASE_URL + "videos/").then(response => {
      console.log(response.body)
      setVideos(response.body);
    }).catch(error => {
      console.error('Error ', error);
    })
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrieren" element={<RegisterPage />} />
        <Route path="/email-notification" element={<SendEmailNotificationPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/main" element={<MainPage videos={videos}/>}/>
      </Routes>
    </>
  );
}

export default App;
