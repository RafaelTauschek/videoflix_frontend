import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/registrieren");
  };
  const handleForgotPasswordrClick = () => {
    navigate("/forgotPassword");
  };

  return (
    <div>
      <div className={styles.logo}><img src="./src/assets/logo/logo.png" alt="" /></div>
      <div className={styles.loginBackground}>
        <Box
          className={styles.login_dialog}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1>Einloggen</h1>
          <div className={styles.loginForm}>
            <TextField
              label="Email"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField label="Password" />
            <div className={styles.login_btns}>
              <div className={styles.auth_btns}>
                <Button className={styles.button_login} variant="contained">Einloggen</Button>
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
                <a onClick={handleForgotPasswordrClick}>Password vergessen?</a>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
