import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ungültige E-Mail-Adresse').required('E-Mail ist erforderlich'),
      password: Yup.string()
        .min(5, 'Das Passwort muss mindestens 5 Zeichen lang sein')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Passwort muss ein Sonderzeichen enthalten')
        .required('Passwort ist erforderlich'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwörter müssen übereinstimmen')
        .required('Passwortbestätigung ist erforderlich'),
    }),
    onSubmit: values => {
      console.log('Formularwerte', values);
      navigate("/"); 
    },
  });

  return (
    <div>
      <div className={styles.logo}>
        <img src="./src/assets/logo/logo.png" alt="Logo" />
      </div>
      <div className={styles.loginBackground}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          className={styles.signUp_dialog}
          sx={{ "& > :not(style)": { m: 1, width: "25ch" }}}
          noValidate
          autoComplete="off"
        >
          <h1 className={styles.SignInHeader}>Neuen Account erstellen</h1>
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              label="Password bestätigen"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            <div className={styles.register_btns}>
              <Button
                type="submit"
                variant="contained"
                className={styles.registration}
              >
                Registrieren
              </Button>
              <Button
                className={styles.register_btn}
                variant="contained"
                onClick={() => navigate("/")}
              >
                Zurück zu Login
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
