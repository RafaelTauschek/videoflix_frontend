import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordNotificationPage() {
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
          <h1 className={styles.headline}>Dir wurde eine Mail geschickt</h1>
          <span>In der Mail findest du einen Link, womit du dien Password zurücksetzen kannst.</span>
          <div className={styles.backToLogin_btn}>
            <a onClick={handleLoginClick}>Email nochmals senden</a>
            <Button
                className={styles.register_btn}
                variant="contained"
                onClick={handleLoginClick}
              >
                Zurück zu Login
              </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
