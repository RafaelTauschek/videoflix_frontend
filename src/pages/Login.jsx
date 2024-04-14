import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/Login.css";

export default function StateTextFields() {
  return (
    <div className="loginBackground">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Einloggen</h1>
        <div className="loginForm">
          <TextField
            id="fullWidth"
            label="Email"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField id="fullWidth" label="Password" />
          <div className="login_btns">
            <Button variant="contained">Einloggen</Button>
            <span>ODER</span>
            <Button className="register_btn" variant="contained">
              Registrieren
            </Button>
            <div className="forgot_password_btn">
              <a href="/">Password vergessen?</a>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
