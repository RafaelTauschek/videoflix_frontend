import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  // Formik-Initialisierung
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ungültige E-Mail-Adresse').required('E-Mail ist erforderlich'),
      password: Yup.string().required('Passwort ist erforderlich')
    }),
    onSubmit: values => {
      console.log('Login Informationen', values);
      navigate("/home"); 
    },
  });

  const handleRegisterClick = () => {
    navigate("/registrieren");
  };
  const handleForgotPasswordClick = () => {
    navigate("/forgotPassword");
  };

  return (
    <div>
      <div className={styles.logo}><img src="./src/assets/logo/logo.png" alt="" /></div>
      <div className={styles.loginBackground}>
        <Box
          component="form"
          className={styles.login_dialog}
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <h1>Einloggen</h1>
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
            <div className={styles.login_btns}>
              <div className={styles.auth_btns}>
                <Button type="submit" className={styles.button_login} variant="contained">Einloggen</Button>
                <Button className={styles.guest_button} variant="contained">Guest</Button>
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
  );
}
