import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function StateTextFields() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className={style.loginBackground}>
      <Box
        className={style.signUp_dialog}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h1 className={style.SignInHeader}>Neuen Account erstellen</h1>
        <div className={style.loginForm}>
          <TextField
            label="Email"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField label="Password" />
          <TextField label="Password bestätigen" />
          <div className={style.register_btns}>
            <Button variant="contained">Einloggen</Button>
            <Button
              className={style.register_btn}
              variant="contained"
              onClick={handleLoginClick}
            >
              Zurück zu Login
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
