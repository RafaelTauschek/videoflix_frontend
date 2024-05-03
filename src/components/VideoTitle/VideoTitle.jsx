import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoTitle.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function VideoTitle({ onSelectGenre, selectedCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categoryNames = {
    Show: "TV Shows",
    Movie: "Movies",
  };
  const genresContainerRef = useRef(null);
  const genresMenuRef = useRef(null);
  const categoryName = categoryNames[selectedCategory] || selectedCategory;
  const handleGenresClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      genresContainerRef.current &&
      !genresContainerRef.current.contains(event.target) &&
      genresMenuRef.current &&
      !genresMenuRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };
  const handleGenreClick = (genre) => {
    onSelectGenre(genre);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={styles.TitleContainer}>
      <span className={styles.Title}>{categoryName}</span>
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
          <div className={styles.GenresMenu} ref={genresMenuRef}>
            <span
              onClick={() => handleGenreClick("All")}
              className={styles.GenresMenu__Item}
            >
              All
            </span>
            <span
              onClick={() => handleGenreClick("Action")}
              className={styles.GenresMenu__Item}
            >
              Action
            </span>
            <span
              onClick={() => handleGenreClick("Adventure")}
              className={styles.GenresMenu__Item}
            >
              Adventure
            </span>
            <span
              onClick={() => handleGenreClick("Animated")}
              className={styles.GenresMenu__Item}
            >
              Animated
            </span>
            <span
              onClick={() => handleGenreClick("Comedy")}
              className={styles.GenresMenu__Item}
            >
              Comedy
            </span>
            <span
              onClick={() => handleGenreClick("Crime")}
              className={styles.GenresMenu__Item}
            >
              Crime
            </span>
            <span
              onClick={() => handleGenreClick("Documentary")}
              className={styles.GenresMenu__Item}
            >
              Documentary
            </span>
            <span
              onClick={() => handleGenreClick("Drama")}
              className={styles.GenresMenu__Item}
            >
              Drama
            </span>
            <span
              onClick={() => handleGenreClick("Fantasy")}
              className={styles.GenresMenu__Item}
            >
              Fantasy
            </span>
            <span
              onClick={() => handleGenreClick("History")}
              className={styles.GenresMenu__Item}
            >
              History
            </span>
            <span
              onClick={() => handleGenreClick("Horror")}
              className={styles.GenresMenu__Item}
            >
              Horror
            </span>
            <span
              onClick={() => handleGenreClick("Mystery")}
              className={styles.GenresMenu__Item}
            >
              Mystery
            </span>
            <span
              onClick={() => handleGenreClick("Romance")}
              className={styles.GenresMenu__Item}
            >
              Romance
            </span>
            <span
              onClick={() => handleGenreClick("Satire")}
              className={styles.GenresMenu__Item}
            >
              Satire
            </span>
            <span
              onClick={() => handleGenreClick("Science fiction")}
              className={styles.GenresMenu__Item}
            >
              Science fiction
            </span>
            <span
              onClick={() => handleGenreClick("Sport")}
              className={styles.GenresMenu__Item}
            >
              Sport
            </span>
            <span
              onClick={() => handleGenreClick("Thriller")}
              className={styles.GenresMenu__Item}
            >
              Thriller
            </span>
            <span
              onClick={() => handleGenreClick("Western")}
              className={styles.GenresMenu__Item}
            >
              Western
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
