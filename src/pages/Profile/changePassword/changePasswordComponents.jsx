import React, { useState, useEffect } from "react";
import styles from "./changePassword.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { changePassword } from "../../../services/AuthServices/authService";
import * as Yup from "yup";
import SuccessSnackbarIntroduction from "../../../components/NotificatoinComponents/SuccessNotification/SuccessNotification";
import { useNavigate } from "react-router-dom";

export default function ChangePasswordComponent({ onPasswordChangeClick }) {
  const { handleOpenSnackbar, SnackbarComponent } =
    SuccessSnackbarIntroduction();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      current_password: Yup.string()
        .min(8, "Aktuelles Password muss mindestens 8 Zeichen lang sein")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Aktuelles Password muss ein Sonderzeichen enthalten"
        )
        .required("Aktuelles Passwort ist erforderlich"),
      new_password: Yup.string()
        .min(8, "Neues Passwort muss mindestens 8 Zeichen lang sein")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Neues Passwort muss ein Sonderzeichen enthalten"
        )
        .required("Neues Passwort ist erforderlich"),
      confirm_password: Yup.string()
        .required("Passwort ist erforderlich")
        .oneOf([Yup.ref("new_password")], "Passwörter müssen übereinstimmen"),
    }),

    onSubmit: (values, { setSubmitting, setErrors }) => {
      changePassword(
        values.current_password,
        values.new_password,
        values.confirm_password
      )
        .then(() => {
          handleOpenSnackbar("Success");
          setTimeout(() => {
            navigate("/main");
          }, 3000);
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.body &&
            error.response.body.error === "Das aktuelle Passwort ist falsch."
          ) {
            setErrors({
              submit: "Das aktuelle Passwort wurde falsch angeben.",
            });
          } else {
            setErrors({ submit: "Die Passwortänderung ist vergeschalgen" });
          }
          setSubmitting(false);
        });
    },
  });

  return (
    <div className={styles.changePasswordContainer}>
      <div className={styles.profileBox}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className={styles.profileBoxContent}
        >
          <h1 className={styles.changePassword_h1}>Neues Passwort festlegen</h1>
          {formik.errors.submit && (
            <div style={{ color: "red", marginTop: "-30px" }}>
              {formik.errors.submit}
            </div>
          )}
          <div className={styles.changePasswordForm}>
            <TextField
              label="Aktuelles Passwort"
              name="current_password"
              onChange={formik.handleChange}
              type="password"
              value={formik.values.current_password}
              error={
                formik.touched.current_password &&
                Boolean(formik.errors.current_password)
              }
              helperText={
                formik.touched.current_password &&
                formik.errors.current_password
              }
            />
            <TextField
              label="Neues Passwort"
              name="new_password"
              onChange={formik.handleChange}
              type="password"
              value={formik.values.new_password}
              error={
                formik.touched.new_password &&
                Boolean(formik.errors.new_password)
              }
              helperText={
                formik.touched.new_password && formik.errors.new_password
              }
            />
            <TextField
              label="Passwort Wiederholen"
              name="confirm_password"
              onChange={formik.handleChange}
              type="password"
              value={formik.values.confirm_password}
              error={
                formik.touched.confirm_password &&
                Boolean(formik.errors.confirm_password)
              }
              helperText={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
              }
            />
            <div className={styles.changePassword_btns}>
              <div className={styles.change_btns}>
                <Button
                  type="submit"
                  className={styles.save_button}
                  variant="contained"
                >
                  Passwort sichern
                </Button>
                <Button
                  onClick={onPasswordChangeClick}
                  className={styles.change_password}
                  variant="contained"
                >
                  Zurück zum Profil
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
      {SnackbarComponent}
    </div>
  );
}
