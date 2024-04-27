import React, { useState, useEffect } from "react";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";
import VideoTitle from "../../components/VideoTitle/VideoTitle";
import VideoDetailView from "../../components/VideoDetailView/VideoDetailView";
import AuthenticationCheck from "../../services/AuthServices/authenticationCheck";
import { get } from "../../services/HTTPS/http";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export default function MainPage({ videos }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const BASE_URL = "http://127.0.0.1:8000/";
  const [videoDetail, setVideoDetail] = useState(null);
  const [videoPlayed, setVideoPlayed] = useState(false);


  const getVideoDetail = (video) => {
    console.log('Url: ', BASE_URL + `videos/${video.id}/`);
    get(BASE_URL + `videos/${video.id}/`).then((response) => {
      setVideoDetail(response.body);
    }).catch ((error) => {
      console.error(error);
    })
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedVideo(null);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleVideoClick = (video) => {
    getVideoDetail(video);
    setSelectedVideo(video);
    setSelectedCategory("All");
  };

  const handleBackButtonClick = () => {
    setSelectedVideo(null);
  };

  const handlePlayVideoClick = () => {
    setVideoPlayed(true);
  };

  const returnFromVideoPlayer = () => {
    setVideoPlayed(false)
  }

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
      <AuthenticationCheck />
      {!videoPlayed ? (
        <>
          <Header onSelectCategory={handleCategoryChange} />
          {selectedCategory !== "All" ? (
            <VideoTitle
              onSelectGenre={handleGenreChange}
              selectedCategory={selectedCategory}
            />
          ) : null}
          {selectedVideo ? (
            <VideoDetailView
              className={styles.VideoDetailView}
              video={selectedVideo}
              handleBackButtonClick={handleBackButtonClick}
              handlePlayVideoClick={handlePlayVideoClick}
            />
          ) : (
            <VideoContainer
              videos={filteredVideos}
              handleVideoClick={handleVideoClick}
            />
          )}
        </>
      ) : (
        <VideoPlayer returnFromVideoPlayer={returnFromVideoPlayer} video={videoDetail} />
      )}
    </div>
  );
}
