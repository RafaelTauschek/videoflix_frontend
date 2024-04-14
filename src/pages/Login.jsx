import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/Login.css"

export default function StateTextFields() {

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="">
        <TextField
          id="fullWidth"
          label="Email"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField id="fullWidth" label="Password"/>
      </div>
    </Box>
  );
}
