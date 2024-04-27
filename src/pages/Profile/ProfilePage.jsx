import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from "./Profile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ChangePasswordComponent from "./changePassword/changePasswordComponents";
import EditProfileComponent from "./editProfileParams/ediProfileForms";
import ProfilImgComponent from "./changeImg/changeImgPage";

export default function ProfilePage() {
  const [showChangeImg, setShowChangeImg] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const toggleChangeImg = () => {
    setShowChangeImg(!showChangeImg);
  };
  const toggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedVideo(null);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("E-Mail ist erforderlich"),
      firstname: Yup.string().required("Vorname ist erforderlich"),
      lastname: Yup.string().required("Nachname ist erforderlich"),
    }),
  });

  return (
      <div className={styles.MainPageContainer}>
        <Header onSelectCategory={handleCategoryChange}></Header>
        {!showChangePassword && !showChangeImg && (
          <div>
            <EditProfileComponent
              onPasswordChangeClick={toggleChangePassword}
              onImgChangeClick={toggleChangeImg}
            />
          </div>
        )}
        {showChangeImg && (
          <div style={{overflowX: "hidden"}}>
            <ProfilImgComponent onImgChangeClick={toggleChangeImg} />
          </div>
        )}
        {showChangePassword && (
          <div>
            <ChangePasswordComponent
              onPasswordChangeClick={toggleChangePassword}
            />
          </div>
        )}
      </div>
  );
}
