import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import { forgotPasswordMail } from "../../../services/AuthServices/authService";
import Footer from "../../../components/Footer/footerComponent";

export default function EmailForForgetPassword() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("E-Mail ist erforderlich"),
    }),

    onSubmit: (values, { setSubmitting, setErrors }) => {
      forgotPasswordMail(values.email)
        .then((response) => {
          localStorage.setItem("token", response.body.token);
          navigate("/forgot-password-notification");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.body &&
            error.response.body.error ===
              "Kein Benutzer mit dieser E-Mail gefunden."
          ) {
            setErrors({
              submit: "Kein Benutzer mit dieser E-Mail gefunden.",
            });
          } else {
            setErrors({ submit: "Email versandt vergeschalgen" });
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
            <h2 className={styles.headline}>Passwort zurücksetzen?</h2>
            <div style={{ paddingBottom: "16px" }}>
              Gib uns deine Mailadresse bekannt, damit wir dir weiterhelfen
              können.
            </div>
            <div className={styles.loginForm}>
              <TextField
                label="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
    </div>
  );
}
