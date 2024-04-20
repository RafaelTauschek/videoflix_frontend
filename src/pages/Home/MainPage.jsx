import React, { useState, useEffect } from "react";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";
import VideoTitle from "../../components/VideoTitle/VideoTitle";

export default function MainPage({ videos }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredVideos =
    videos && videos.length > 0
      ? selectedCategory === "All" && selectedGenre === "All"
        ? videos
        : videos.filter(
            (video) =>
              (selectedCategory === "All" ||
                video.category === selectedCategory) &&
              (selectedGenre === "All" || video.genre === selectedGenre)
          )
      : [];

  return (
    <div className={styles.MainPageContainer}>
      <Header onSelectCategory={handleCategoryChange}></Header>
      <VideoTitle onSelectGenre={handleGenreChange}></VideoTitle>
      <VideoContainer videos={filteredVideos} />
      {/* Footer */}
    </div>
  );
}
