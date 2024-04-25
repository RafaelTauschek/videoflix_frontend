import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Admin.module.css";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function AdminPage() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedVideo(null);
  };
  const navigate = useNavigate();
  const [fsk, setFSK] = React.useState("");
  const handleFSK = (event) => {
    setFSK(event.target.value);
  };
  const [genre, setGenre] = React.useState("");
  const handleGenre = (event) => {
    setGenre(event.target.value);
  };
  const [category, setCategory] = React.useState("");
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("E-Mail ist erforderlich"),
      password: Yup.string()
        .min(5, "Das Passwort muss mindestens 5 Zeichen lang sein")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Passwort muss ein Sonderzeichen enthalten"
        )
        .required("Passwort ist erforderlich"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwörter müssen übereinstimmen")
        .required("Passwortbestätigung ist erforderlich"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      register(values.email, values.password)
        .then((response) => {
          localStorage.setItem("token", response.body.token);
          navigate("/email-notification");
        })
        .catch((error) => {
          console.error("Regestrierung fehlgeschlagen:", error);
          setErrors({ submit: "Regestrierung fehlgeschlagen" });
          setSubmitting(false);
        });
    },
  });

  return (
    <div className={styles.MainPageContainer}>
      <Header onSelectCategory={handleCategoryChange}></Header>
      <div className={styles.uploadContainer}>
        <div style={{ maxWidth: "1440px" }}>
          <h1>Upload eines neuen Videos</h1>
          <div>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              className={styles.upload_dialog}
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div className={styles.uploadForm}>
                <TextField
                  label="Title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  label="Kurzbeschreibung"
                  name="short_description"
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                  label="Langbeschreibung "
                  name="long_description"
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
                <div className={styles.upload_btns}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    className={styles.upload_button}
                  >
                    Upload Video
                    <VisuallyHiddenInput type="file" />
                  </Button>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    className={styles.upload_button}
                  >
                    Upload Thumbnail
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">FSK</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fsk}
                    label="FSK"
                    onChange={handleFSK}
                  >
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DemoContainer components={["DatePicker", "DatePicker"]} style={{width: "100%"}}>
                    <DatePicker label={'Erscheinungsjahr'} openTo="year" />
                  </DemoContainer>
                </LocalizationProvider>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Genre"
                    onChange={handleGenre}
                  >
                    <MenuItem value={"Thriller"}>Thriller</MenuItem>
                    <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                    <MenuItem value={"History"}>History</MenuItem>
                    <MenuItem value={"Comedy"}>Comedy</MenuItem>
                    <MenuItem value={"Adventure"}>Adventure</MenuItem>
                    <MenuItem value={"Drama"}>Drama</MenuItem>
                    <MenuItem value={"Western"}>Western</MenuItem>
                    <MenuItem value={"Science fiction"}>Science fiction</MenuItem>
                    <MenuItem value={"Documentry"}>Documentry</MenuItem>
                    <MenuItem value={"Mystery"}>Mystery</MenuItem>
                    <MenuItem value={"Romance"}>Romance</MenuItem>
                    <MenuItem value={"Satire"}>Satire</MenuItem>
                    <MenuItem value={"Horror"}>Horror</MenuItem>
                    <MenuItem value={"Sport"}>Sport</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleCategory}
                  >
                    <MenuItem value={"Movie"}>Movie</MenuItem>
                    <MenuItem value={"Show"}>Show</MenuItem>
                  </Select>
                </FormControl>
                <div className={styles.register_btns}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.registration}
                  >
                    Upload Video
                  </Button>
                  <Button
                    className={styles.backToMain}
                    variant="contained"
                    onClick={() => navigate("/main")}
                  >
                    Zurück zum Dashboard
                  </Button>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
