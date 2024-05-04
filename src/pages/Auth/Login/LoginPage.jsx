import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UnstyledSnackbarIntroduction from "../../../components/NotificatoinComponents/ErrorNotification/ErrorNotification";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/AuthServices/authService";
import AuthenticationCheck from "../../../services/AuthServices/authenticationCheck";
import Footer from "../../../components/Footer/footerComponent";

export default function LoginForm() {
  const { handleOpenSnackbar, SnackbarComponent } =
    UnstyledSnackbarIntroduction();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("E-Mail ist erforderlich"),
      password: Yup.string().required("Passwort ist erforderlich"),
    }),

    onSubmit: (values, { setSubmitting, setErrors }) => {
      login(values.email, values.password)
        .then((response) => {
          localStorage.setItem("token", response.body.token);
          navigate("/main");
        })
        .catch((error) => {
          console.error(error.response.body.error);
          if (
            error.response &&
            error.response.body &&
            error.response.body.error === "Invalid Credentials"
          ) {
            setErrors({
              submit:
                "Falsche Eingabe - bitte achte auf Groß- und Kleinschreibung",
            });
          } else if (
            error.response &&
            error.response.body &&
            error.response.body.error === "Not Validated"
          ) {
            handleOpenSnackbar("");
          } else {
            setErrors({ submit: "Login fehlgeschlagen" });
          }

          setSubmitting(false);
        });
    },
  });

  const handleRegisterClick = () => {
    navigate("/registrieren");
  };
  const handleForgotPasswordClick = () => {
    navigate("/forgotPassword");
  };
  const handleGuestLoginClick = () => {
    login("test@mail.com", "dasIsteinTestPassword!")
      .then((response) => {
        localStorage.setItem("token", response.body.token);
        navigate("/main");
      })
      .catch((error) => {
        console.error("Login fehlgeschlagen:", error);
        setErrors({ submit: "Login fehlgeschlagen" });
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.loginBackground}>
      <AuthenticationCheck />
      <div className={styles.logo}>
        <img src="assets/logo/logo.png" alt="" />
      </div>
      <div className={styles.loginComponent}>
        <div>
          <Box
            component="form"
            className={styles.login_dialog}
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <h1>Einloggen</h1>
            {formik.errors.submit && (
              <div style={{ color: "red", marginTop: "-30px" }}>
                {formik.errors.submit}
              </div>
            )}
            <div className={styles.loginForm}>
              <TextField
                label="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <div className={styles.login_btns}>
                <div className={styles.auth_btns}>
                  <Button
                    type="submit"
                    className={styles.button_login}
                    variant="contained"
                  >
                    Einloggen
                  </Button>
                  <Button
                    className={styles.guest_button}
                    variant="contained"
                    onClick={handleGuestLoginClick}
                  >
                    Guest
                  </Button>
                </div>
                <span>ODER</span>
                <Button
                  className={styles.register_btn}
                  variant="contained"
                  onClick={handleRegisterClick}
                >
                  Registrieren
                </Button>
                <div className={styles.forgot_password_btn}>
                  <a onClick={handleForgotPasswordClick}>Passwort vergessen?</a>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <Footer></Footer>
      {SnackbarComponent}
    </div>
  );
}
