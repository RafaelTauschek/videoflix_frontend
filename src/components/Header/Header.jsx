import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { logout } from "../../services/AuthServices/authService";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/AuthServices/authService";

export default function Header({ onSelectCategory }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuContainerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    profile_img: ""
  });

  useEffect(() => {
    getProfile().then((response) => {
      setUserData({
        profile_img: response.body.profile_img
      });
    });
  }, []);

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogoutClick = () => {
    logout()
      .then(() => {
        localStorage.removeItem("token");
        setMenuVisible(!menuVisible);
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout fehlgeschlagen:", error);
        setMenuVisible(!menuVisible);
      });
  };

  const handleClickOutside = (event) => {
    if (
      menuContainerRef.current &&
      !menuContainerRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <div>
          <a onClick={() => navigate("/main")}>
            <img
              className={styles.Logo}
              src="./src/assets/logo/logo.png"
              alt="logo"
            />
          </a>
        </div>
        <ul className={styles.OptionList}>
          <li
            className={styles.OptionList__Item}
            onClick={() => handleCategoryClick("All")}
          >
            Home
          </li>
          <li
            className={styles.OptionList__Item}
            onClick={() => handleCategoryClick("Show")}
          >
            TV Shows
          </li>
          <li
            className={styles.OptionList__Item}
            onClick={() => handleCategoryClick("Movie")}
          >
            Movies
          </li>
        </ul>
      </div>
      <div className={styles.HeaderRight}>
        {/* <SearchIcon className={styles.SearchIcon} /> */}
        <div className={styles.UserContainer}>
          <img
            onClick={handleMenuClick}
            className={styles.UserContainer__Picture}
            ref={menuContainerRef}
            // src="./src/assets/profile/cat_profilepicture.jpg"
            src = {userData.profile_img}
            alt="profilepicture"
          />
          {menuVisible && (
            <div className={styles.UserMenu} ref={menuRef}>
              <img
                className={styles.UserContainer__Picture}
                // src="./src/assets/profile/cat_profilepicture.jpg"
                src = {userData.profile_img}
                alt="profilepicture"
              />
              <span
                onClick={() => navigate("/profile")}
                className={styles.UserMenu__Item}
              >
                Profile
              </span>
              <span
                onClick={() => navigate("/upload")}
                className={styles.UserMenu__Item}
              >
                Admin
              </span>
              <span
                onClick={handleLogoutClick}
                className={styles.UserMenu__Item}
              >
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
