import React, { useState, useEffect } from "react";
import styles from "./editProfile.module.css";
import { Pencil } from "lucide-react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../../services/AuthServices/authService";
import { getProfile } from "../../../services/AuthServices/authService";
import SuccessSnackbarIntroduction from "../../../components/NotificatoinComponents/SuccessNotification/SuccessNotification";


export default function EditProfileComponent({
  onPasswordChangeClick,
  onImgChangeClick,
}) {
  const [userData, setUserData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    profile_img: ""
  });

  useEffect(() => {
    getProfile().then((response) => {
      setUserData({
        email: response.body.email,
        firstname: response.body.first_name,
        lastname: response.body.last_name,
        profile_img: response.body.profile_img
      });
    });
  }, []);

  const { handleOpenSnackbar, SnackbarComponent } =
    SuccessSnackbarIntroduction();

  const formik = useFormik({
    initialValues: userData,
    enableReinitialize: true, 
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("E-Mail ist erforderlich"),
      firstname: Yup.string().required("Vorname ist erforderlich"),
      lastname: Yup.string().required("Nachname ist erforderlich"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      updateProfile(values.email, values.firstname, values.lastname)
        .then(() => {
          handleOpenSnackbar("Success");
        })
        .catch(() => {
          setErrors({ submit: "Etwas ist fehlgeschlagen" });
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <div className={styles.profileImg}>
        <img src={userData.profile_img} alt="" />
        <div className={styles.changeImgPencil} onClick={onImgChangeClick}>
          <div style={{ color: "white" }}>
            <Pencil width={"50"} height={"50"} />
          </div>
        </div>
      </div>
      <div className={styles.profileBox}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className={styles.profileBoxContent}
        >
          <h1>Angabe der Profildaten:</h1>
          {formik.errors.submit && (
            <div style={{ color: "red", marginTop: "-30px" }}>
              {formik.errors.submit}
            </div>
          )}
          <div className={styles.profileForm}>
            <TextField
              label="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Vorname"
              name="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              label="Nachname"
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <div className={styles.profile_btns}>
              <div className={styles.change_btns}>
                <Button
                  type="submit"
                  className={styles.save_button}
                  variant="contained"
                >
                  Sichern
                </Button>
                <Button
                  className={styles.change_password}
                  variant="contained"
                  onClick={onPasswordChangeClick}
                >
                  Passwort ändern
                </Button>
              </div>
            </div>
          </div>
        </Box>
        {SnackbarComponent}
      </div>
    </>
  );
}
