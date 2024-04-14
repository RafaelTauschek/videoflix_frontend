import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function StateTextFields() {
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
          className={styles.signUp_dialog}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1 className={styles.SignInHeader}>Neuen Account erstellen</h1>
          <div className={styles.loginForm}>
            <TextField
              label="Email"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField label="Password" />
            <TextField label="Password bestätigen" />
            <div className={styles.register_btns}>
              <Button variant="contained">Einloggen</Button>
              <Button
                className={styles.register_btn}
                variant="contained"
                onClick={handleLoginClick}
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
