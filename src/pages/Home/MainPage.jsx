import React, { useState } from "react";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";
import VideoTitle from "../../components/VideoTitle/VideoTitle";




export default function MainPage({ videos }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filteredVideos = selectedCategory === 'All' ? videos: videos.filter(video => video.category === selectedCategory);

  return (
    <div className={styles.MainPageContainer}>
      <Header onSelectCategory={handleCategoryChange}></Header>
      <VideoTitle></VideoTitle>
      <VideoContainer videos={filteredVideos} />
      {/* Footer */}
    </div>
  );
}
