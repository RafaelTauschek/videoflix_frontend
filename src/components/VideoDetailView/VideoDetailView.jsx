import React, { useEffect, useState } from "react";
import styles from "./VideoDetailView.module.css";
import { get } from "../../services/HTTPS/http";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function VideoDetailView({ video, handleBackButtonClick }) {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [videoDetail, setVideoDetail] = useState({});


  const handleBackClick = () => {
    handleBackButtonClick();
  };

  const handleVideoPlayClick = () => {
    /**
     * TODO, open Videoplayer with the resolution fullscreen.
     * 
     */
  }

  const categoryNames = {
    Show: "TV Show",
    Movie: "Movie",
  };

  useEffect(() => {
    get(BASE_URL + `videos/${video.id}/`)
      .then((response) => {
        setVideoDetail(response.body);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  }, [video.id]);

  useEffect(() => {
    console.log(videoDetail);
  }, [videoDetail]);

  return (
    <div className={styles.VideoDetail__Container}>
      <VideoPlayer video={videoDetail}></VideoPlayer>
      {/* All rendering should go in here */}
      {videoDetail && Object.keys(videoDetail).length > 0 && (
        <div className={styles.VideoDetail} style={{ backgroundImage: `url(${"http://127.0.0.1:8000" + videoDetail.video.thumbnail})`,}}
        >
          
          <div className={styles.GradientOverlay}></div>
          <div className={styles.BackButton}>
            <CloseIcon onClick={handleBackClick} />
          </div>
          <div className={styles.VideoItem__CategoryContainer}>
            <div>
              <img
                className={styles.CategoryContainer__Img}
                src="./src/assets/logo/favicon.png"
                alt="logo"
              />
            </div>
            <span className={styles.VideoItem__Category}>
              {categoryNames[videoDetail.video.category]}
            </span>
          </div>
          <span className={styles.VideoItem__Title}>
            {videoDetail.video.title}
          </span>
          <span className={styles.VideoItem__Description}>
            {videoDetail.video.short_description}
          </span>
          <div className={styles.VideoItem__ButtonContainer}>
            <div className={styles.ButtonContainer__Play} onClick={handleVideoPlayClick}>
              <PlayArrowIcon sx={{ color: "black" }} />
              <span className={styles.PlayButton__Text}>Play</span>
            </div>
            <div className={styles.ButtonContainer__Save}>
              <AddIcon />
            </div>
          </div>
          <div className={styles.VideoItem__Footer}>
            <div className={styles.Footer__Header}>
              <span className={styles.Header__Title}>DETAILS</span>
            </div>
            <div className={styles.VideoItem_Footer_Content}>
                <div className={styles.VideoItem__VideoDetail__Main}>
                  <span className={styles.VideoDetail__Main__Title}>{videoDetail.video.title}</span>
                  <span className={styles.VideoDetail__Main__Description}>{videoDetail.video.long_description}</span>
                </div>
                <div className={styles.VideoItem__VideoDetails}>
                  <span className={styles.VideoDetail_Title}>Duration:</span>
                  <span className={styles.VideoDetail_Content}>{videoDetail.video.duration_time}</span>
                  <span className={styles.VideoDetail_Title}>Relese date:</span>
                  <span className={styles.VideoDetail_Content}>{videoDetail.video.release_year}</span>
                  <span className={styles.VideoDetail_Title}>Genre:</span>
                  <span className={styles.VideoDetail_Content}>{videoDetail.video.genre}</span>
                  <span className={styles.VideoDetail_Title}>Age restriction:</span>
                  <span className={styles.VideoDetail_Content}>{videoDetail.video.fsk}</span>
                </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}


