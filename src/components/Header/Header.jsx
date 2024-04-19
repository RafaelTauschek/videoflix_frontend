import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header({ onSelectCategory }) {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };
  const handleMenuClick = () => {
    setMenuVisable(true);
  };

  const menuContainerRef = useRef(null);

  const [menuVisable, setMenuVisable] = useState(false);

  const handleClickOutside = (event) => {
    if (
      menuContainerRef.current &&
      !menuContainerRef.current.contains(event.target)
    ) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    setMenuVisable(!menuVisable);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <div>
          <img
            className={styles.Logo}
            src=".\src\assets\logo\logo.png"
            alt="logo"
          />
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
            src="./src/assets/profile/cat_profilepicture.jpg"
            alt="profilepicture"
          />
          {menuVisable && (
            <div className={styles.UserMenu}>
              <img
                className={styles.UserContainer__Picture}
                src="./src/assets/profile/cat_profilepicture.jpg"
                alt="profilepicture"
              />
              <span onClick={toggleMenu} className={styles.UserMenu__Item}>
                Profile
              </span>
              <span onClick={toggleMenu} className={styles.UserMenu__Item}>
                Admin Page
              </span>
              <span onClick={toggleMenu} className={styles.UserMenu__Item}>
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
