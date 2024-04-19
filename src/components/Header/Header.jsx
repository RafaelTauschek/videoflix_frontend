import React from "react";
import styles from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header({ onSelectCategory  }) {
  const handleCategoryClick = (category) => {
    onSelectCategory (category);
  }


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
          <li className={styles.OptionList__Item} onClick={() => handleCategoryClick('All')}>Home</li>
          <li className={styles.OptionList__Item} onClick={() => handleCategoryClick('Show')}>TV Shows</li>
          <li className={styles.OptionList__Item} onClick={() => handleCategoryClick('Movie')}>Movies</li>
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
