import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/Register.css";

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
        <h1 className="SignInHeader">Neuen Account erstellen</h1>
        <div className="loginForm">
          <TextField
            id="fullWidth"
            label="Email"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField id="fullWidth" label="Password" />
          <TextField id="fullWidth" label="Password bestätigen" />
          <div className="register_btns">
            <Button variant="contained">Einloggen</Button>
            <Button className="register_btn" variant="contained">
              Zurück zu Login
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
