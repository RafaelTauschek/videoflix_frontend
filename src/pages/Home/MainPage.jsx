import React, { useState, useEffect } from "react";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";
import VideoTitle from "../../components/VideoTitle/VideoTitle";
import VideoDetailView from "../../components/VideoDetailView/VideoDetailView";

export default function MainPage({ videos }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedVideo(null)
    setSelectedCategory(category);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleBackButtonClick = () => {
    setSelectedVideo(null);
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
      {selectedCategory !== "All" ? (
        <VideoTitle
          onSelectGenre={handleGenreChange}
          selectedCategory={selectedCategory}
        ></VideoTitle>
      ) : null}
      {selectedVideo ? (
        <VideoDetailView
          video={selectedVideo}
          handleBackButtonClick={handleBackButtonClick}
        />
      ) : (
        <VideoContainer
          videos={filteredVideos}
          handleVideoClick={handleVideoClick}
        />
      )}
      {/* Footer */}
    </div>
  );
}
