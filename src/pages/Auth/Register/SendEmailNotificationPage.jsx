import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../ForgotPassword/ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/footerComponent";

export default function SendEmailNotificationPage() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.loginBackground}>
      <div className={styles.logo}>
        <img src="assets/logo/logo.png" alt="" />
      </div>
      <div className={styles.loginComponent}>
        <div>
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
            <span>
              In der Mail findest du einen Link, um deine Email zu bestätigen.
              Dannach kannst du dich anmelden.
            </span>
            <div className={styles.backToLogin_btn}>
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
      <Footer></Footer>
    </div>
  );
}
