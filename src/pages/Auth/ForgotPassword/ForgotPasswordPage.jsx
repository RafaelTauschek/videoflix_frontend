import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./ForgotPassword.module.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../services/AuthServices/authService";
import SuccessSnackbarIntroduction from "../../../components/NotificatoinComponents/SuccessNotification/SuccessNotification";
import Footer from "../../../components/Footer/footerComponent";

export default function ForgotPasswordPage() {
  const { uid, token } = useParams();
  
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  const { handleOpenSnackbar, SnackbarComponent } = SuccessSnackbarIntroduction();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Passwort muss mindestens 8 Zeichen lang sein")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Passwort muss ein Sonderzeichen enthalten"
        )
        .required("Passwort ist erforderlich"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwörter müssen übereinstimmen")
        .required("Passwortbestätigung ist erforderlich"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      forgotPassword(uid, token, values.password)
        .then(() => {
          handleOpenSnackbar("Success");
          setTimeout(() => {
            navigate("/");
          }, 2000);  
        })
        .catch((error) => {
          console.error("Passwort Anpassung fehlgeschlagen:", error);
          if (
            error.response &&
            error.response.body &&
            error.response.body.error === "Der Passwort-Reset-Link ist ungültig oder abgelaufen."
          ) {
            setErrors({
              submit:
                "Der Passwort-Reset-Link ist ungültig oder abgelaufen.",
            });
          } else {
            setErrors({ submit: "Passwort überschreiben fehlgeschlagen" });
          }
          setSubmitting(false);
        });
    },
  });

  return (
    <div className={styles.loginBackground}>
      <div className={styles.logo}>
        <img src="./src/assets/logo/logo.png" alt="" />
      </div>
      <div className={styles.loginComponent}>
        <div>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            className={styles.login_dialog}
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <h1 className={styles.headline}>Passwort zurücksetzen</h1>
            <div className={styles.loginForm}>
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                label="Password wiederholen"
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
              {formik.errors.submit && (
                <div style={{ color: "red", marginTop: "10px" }}>
                  {formik.errors.submit}
                </div>
              )}
              <div className={styles.login_btns}>
                <Button
                  type="submit"
                  className={styles.button_login}
                  variant="contained"
                >
                  Reset Password
                </Button>
                <div className={styles.backToLogin_btn}>
                  <a onClick={handleLoginClick}>Zurück zum login</a>
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
