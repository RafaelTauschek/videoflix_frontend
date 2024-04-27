import "./App.css";
import React, { useState, useEffect } from "react";
import LoginPage from "./pages/Auth/Login/LoginPage";
import RegisterPage from "./pages/Auth/Register/RegisterPage";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPasswordNotificationPage";
import EmailForForgetPassword from "./pages/Auth/ForgotPassword/ForgotPasswordAddEmailPage";
import ResetPassword from "./pages/Auth/ForgotPassword/ForgotPasswordPage";
import SendEmailNotificationPage from "./pages/Auth/Register/SendEmailNotificationPage";
import MainPage from "./pages/Home/MainPage";
import AdminPage from "./pages/Admin Page/AdminPage";
import ProfilePage from "./pages/Profile/ProfilePage";

import ImpressumPage from "./pages/Legal/Imprint/ImprintPage";
import PrivacyPolicyPage from "./pages/Legal/PrivatePolicy/PrivatePolicyPage";

import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrieren" element={<RegisterPage />} />
        <Route path="/email-notification" element={<SendEmailNotificationPage />}/>
        <Route path="/forgotPassword" element={<EmailForForgetPassword />} />
        <Route path="/forgot-password-notification" element={<ForgotPassword />}/>
        <Route path="/forgot-password-reset/:uid/:token" element={<ResetPassword />}/>
        <Route path="/main" element={<MainPage/>} />

        <Route path="/upload" element={<AdminPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/datenschutz" element={<PrivacyPolicyPage />} />
        <Route path="/imprint" element={<ImpressumPage />} />
        <Route path="/forgot-password-reset/:uid/:token" element={<ResetPassword />}/>
      </Routes>
    </>
  );
}

export default App;
