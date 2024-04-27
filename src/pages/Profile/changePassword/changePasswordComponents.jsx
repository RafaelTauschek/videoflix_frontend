import React, { useState, useEffect } from "react";
import styles from "./changePassword.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ChangePasswordComponent({ onPasswordChangeClick }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Passwort muss mindestens 8 Zeichen lang sein")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Passwort muss ein Sonderzeichen enthalten"
        )
        .required("Passwort ist erforderlich"),
      newPassword: Yup.string()
        .min(8, "Passwort muss mindestens 8 Zeichen lang sein")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Passwort muss ein Sonderzeichen enthalten"
        )
        .required("Passwort ist erforderlich"),
      repeatPassword: Yup.string()
        .min(8, "Passwort muss mindestens 8 Zeichen lang sein")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Passwort muss ein Sonderzeichen enthalten"
        )
        .required("Passwort ist erforderlich"),
    }),
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
              name="currentPasswort"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              label="Neues Passwort"
              name="newPassword"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
            />
            <TextField
              label="Passwort Wiederholen"
              name="repeatPassword"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              error={
                formik.touched.repeatPassword &&
                Boolean(formik.errors.repeatPassword)
              }
              helperText={
                formik.touched.repeatPassword && formik.errors.repeatPassword
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
    </div>
  );
}
