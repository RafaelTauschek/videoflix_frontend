import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={styles.logo}>
        <img src="./src/assets/logo/logo.png" alt="" />
      </div>
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
          <h1>Passwort zurücksetzen</h1>
          <div className={styles.loginForm}>
            <TextField
              label="Password"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField label="Password wiederholen" />
            <div className={styles.login_btns}>
              <Button className={styles.button_login} variant="contained">
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
  );
}
