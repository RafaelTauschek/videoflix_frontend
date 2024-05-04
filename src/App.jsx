import "./App.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registrieren" element={<RegisterPage />} />
          <Route path="/email-notification" element={<SendEmailNotificationPage />}/>
          <Route path="/forgotPassword" element={<EmailForForgetPassword />} />
          <Route path="/forgot-password-notification" element={<ForgotPassword />}/>
          <Route path="/forgot-password-reset/:uid/:token" element={<ResetPassword />}/>
          <Route path="/main" element={<MainPage />} />
          <Route path="/upload" element={<AdminPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/datenschutz" element={<PrivacyPolicyPage />} />
          <Route path="/imprint" element={<ImpressumPage />} />
          <Route path="/forgot-password-reset/:uid/:token" element={<ResetPassword />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.8)', // Border-Farbe immer
            borderWidth: '1px', // Standard Border-Dicke
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.8)', // Border-Farbe beim Hover
            borderWidth: '2px', // Erhöhte Border-Dicke beim Hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.8)', // Border-Farbe im Fokus, gleich gehalten
            borderWidth: '2px', // Erhöhte Border-Dicke im Fokus
          },
          color: 'rgba(255, 255, 255, 0.8)', // Textfarbe für die Input-Basis
        },
        input: {
          color: 'rgba(255, 255, 255, 0.8)', // Textfarbe für den Input
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.8)', // Allgemeine und Fokus-Farbe für Labels
          '&.Mui-focused': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%', // Breite für alle Form Controls
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.8)', // Farbe für IconButtons
        },
      },
    },
  },
});


export default App;
