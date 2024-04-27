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
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
  const handleDateChange = (date) => {
    formik.setFieldValue("date", date);
  };
  const navigate = useNavigate();
  const handleVideoFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      formik.setFieldValue("videoFile", file);
      formik.setFieldValue("videoFileName", file.name);
    } else {
      formik.setFieldValue("videoFile", null);
      formik.setFieldValue("videoFileName", "");
    }
  };

  const handleImgFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      formik.setFieldValue("thumbnail", file);
      formik.setFieldValue("thumbnailName", file.name);
    } else {
      formik.setFieldValue("thumbnail", null);
      formik.setFieldValue("thumbnailName", "");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      short_description: "",
      long_description: "",
      fsk: "",
      date: null,
      genre: "",
      category: "",
      videoFile: null,
      videoFileName: "",
      thumbnail: null,
      thumbnailName: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title ist erforderlich"),
      short_description: Yup.string().required(
        "Kurzbeschreibung ist erforderlich"
      ),
      long_description: Yup.string().required("Beschreibung ist erforderlich"),
      fsk: Yup.string().required("FSK ist erforderlich"),
      date: Yup.string().required("Erscheinungsjahr ist erforderlich"),
      genre: Yup.string().required("Genre ist erforderlich"),
      category: Yup.string().required("Kategorie ist erforderlich"),
      videoFile: Yup.mixed()
        .required("Ein Video ist erforderlich")
        .test(
          "fileType",
          "Ungültiges Dateiformat",
          (value) => value && value.type.startsWith("video/")
        )
        .test(
          "fileSize",
          "Die Datei ist zu groß",
          (value) => value && value.size <= 104857600
        ),
      thumbnail: Yup.mixed()
        .required("Ein Thumbnail ist erforderlich")
        .test(
          "fileType",
          "Ungültiges Dateiformat",
          (value) => value && value.type.startsWith("image/")
        )
        .test(
          "fileSize",
          "Die Datei ist zu groß",
          (value) => value && value.size <= 104857600
        ),
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
        <div>
          <h1 className={styles.upload_h1}>Upload eines neuen Videos</h1>
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
                  value={formik.values.title}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                  label="Kurzbeschreibung"
                  name="short_description"
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                  value={formik.values.short_description}
                  error={
                    formik.touched.short_description &&
                    Boolean(formik.errors.short_description)
                  }
                  helperText={
                    formik.touched.short_description &&
                    formik.errors.short_description
                  }
                />
                <TextField
                  label="Langbeschreibung "
                  name="long_description"
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                  value={formik.values.long_description}
                  error={
                    formik.touched.long_description &&
                    Boolean(formik.errors.long_description)
                  }
                  helperText={
                    formik.touched.long_description &&
                    formik.errors.long_description
                  }
                />
                <FormControl
                  fullWidth
                  error={formik.touched.fsk && Boolean(formik.errors.fsk)}
                >
                  <InputLabel id="fsk-label">FSK</InputLabel>
                  <Select
                    labelId="fsk-label"
                    id="fsk"
                    name="fsk"
                    value={formik.values.fsk}
                    label="FSK"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                  </Select>
                  {formik.touched.fsk && formik.errors.fsk && (
                    <FormHelperText>{formik.errors.fsk}</FormHelperText>
                  )}
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker", "DatePicker"]}
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      label={"Erscheinungsjahr"}
                      name="date"
                      openTo="year"
                      views={["year"]}
                      value={formik.values.date}
                      onChange={handleDateChange}
                    />
                    {formik.touched.date && formik.errors.date && (
                      <FormHelperText
                        style={{
                          color: "#d32f2f",
                          paddingLeft: "14px",
                          marginTop: "3px",
                        }}
                      >
                        {formik.errors.date}
                      </FormHelperText>
                    )}
                  </DemoContainer>
                </LocalizationProvider>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                  <Select
                    id="genre"
                    name="genre"
                    value={formik.values.genre}
                    label="Genre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={"Thriller"}>Thriller</MenuItem>
                    <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                    <MenuItem value={"History"}>History</MenuItem>
                    <MenuItem value={"Comedy"}>Comedy</MenuItem>
                    <MenuItem value={"Adventure"}>Adventure</MenuItem>
                    <MenuItem value={"Drama"}>Drama</MenuItem>
                    <MenuItem value={"Western"}>Western</MenuItem>
                    <MenuItem value={"Science fiction"}>
                      Science fiction
                    </MenuItem>
                    <MenuItem value={"Documentry"}>Documentry</MenuItem>
                    <MenuItem value={"Mystery"}>Mystery</MenuItem>
                    <MenuItem value={"Romance"}>Romance</MenuItem>
                    <MenuItem value={"Satire"}>Satire</MenuItem>
                    <MenuItem value={"Horror"}>Horror</MenuItem>
                    <MenuItem value={"Sport"}>Sport</MenuItem>
                  </Select>
                  {formik.touched.genre && formik.errors.genre && (
                    <FormHelperText
                      style={{ color: "#d32f2f", marginTop: "3px" }}
                    >
                      {formik.errors.genre}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="category"
                    id="demo-simple-select"
                    value={formik.values.category}
                    label="Category"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={"Movie"}>Movie</MenuItem>
                    <MenuItem value={"Show"}>Show</MenuItem>
                  </Select>
                  {formik.touched.category && formik.errors.category && (
                    <FormHelperText
                      style={{ color: "#d32f2f", marginTop: "3px" }}
                    >
                      {formik.errors.category}
                    </FormHelperText>
                  )}
                </FormControl>

                <div className={styles.upload_btns}>
                  <div>
                    <Button
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                      className={styles.upload_button}
                    >
                      Upload Video
                      <input
                        type="file"
                        accept="video/*"
                        style={{ display: "none" }}
                        onChange={handleVideoFileChange}
                        onBlur={formik.handleBlur}
                      />
                    </Button>
                    {formik.values.videoFileName && (
                      <p>Datei: {formik.values.videoFileName}</p>
                    )}
                    {formik.touched.videoFile && formik.errors.videoFile && (
                      <div
                        style={{
                          color: "#d32f2f",
                          marginTop: "3px",
                          fontSize: "0.75rem",
                          marginLeft: "14px",
                        }}
                      >
                        {formik.errors.videoFile}
                      </div>
                    )}
                  </div>
                  <div>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      className={styles.upload_button}
                    >
                      Upload Thumbnail
                      <VisuallyHiddenInput
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleImgFileChange}
                        onBlur={formik.handleBlur}
                      />
                    </Button>
                    {formik.values.thumbnailName && (
                      <p>Datei: {formik.values.thumbnailName}</p>
                    )}
                    {formik.touched.thumbnail && formik.errors.thumbnail && (
                      <div
                        style={{
                          color: "#d32f2f",
                          marginTop: "3px",
                          fontSize: "0.75rem",
                          marginLeft: "14px",
                        }}
                      >
                        {formik.errors.thumbnail}
                      </div>
                    )}
                  </div>
                </div>
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
