import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoTitle.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function VideoTitle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const genresContainerRef = useRef(null);
  const handleGenresClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      genresContainerRef.current &&
      !genresContainerRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleSelectGenreClick = () => {
    /**
     * TODO:
     * only show Videos of the Category
     * maybe add a "red '|' left of the Genre-name to show the currently selected Genre "
     */
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={styles.TitleContainer}>
      <span className={styles.Title}>Movies</span>
      <div>
        <div
          className={styles.GenresContainer}
          onClick={handleGenresClick}
          ref={genresContainerRef}
        >
          <span className={styles.GenresTitle}>Genres</span>
          <ArrowDropDownIcon />
        </div>
        {isMenuOpen && (
          <div className={styles.GenresMenu}>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Western
            </span>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Comedy
            </span>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Horror
            </span>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Action
            </span>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Drama
            </span>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Thriller
            </span>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Adventure
            </span>
            <span
              onClick={handleSelectGenreClick}
              className={styles.GenresMenu__Item}
            >
              Animated
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
