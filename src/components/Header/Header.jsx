import React from "react";
import styles from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
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
          <li className={styles.OptionList__Item}>Home</li>
          <li className={styles.OptionList__Item}>TV Shows</li>
          <li className={styles.OptionList__Item}>Movies</li>
          <li className={styles.OptionList__Item}>New & Popular</li>
          <li className={styles.OptionList__Item}>My List</li>
        </ul>
      </div>
      <div className={styles.HeaderRight}>
        <SearchIcon className={styles.SearchIcon}/>
        <div className={styles.UserContainer}>
            {/* <img className={styles.UserContainer__Picture} src="" alt="profilepicture"/> */}
            <ArrowDropDownIcon/>
        </div>
      </div>
    </header>
  );
}
