import React from "react";
import styles from "./VideoDetailView.module.css";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

export default function VideoDetailView({
  video,
  handleBackButtonClick,
  handlePlayVideoClick,
}) {


  const handleBackClick = () => {
    handleBackButtonClick();
  };

  const handlePlayClick = () => {
    handlePlayVideoClick();
  };

  const categoryNames = {
    Show: "TV Show",
    Movie: "Movie",
  };

  return (
    <div className={styles.VideoDetail__Container}>
      {video && Object.keys(video).length > 0 && (
        <div
          className={styles.VideoDetail}
          style={{
            backgroundImage: `url(${
              "http://127.0.0.1:8000" + video.thumbnail
            })`,
          }}
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
              {categoryNames[video.category]}
            </span>
          </div>
          <span className={styles.VideoItem__Title}>
            {video.title}
          </span>
          <span className={styles.VideoItem__Description}>
            {video.short_description}
          </span>
          <div className={styles.VideoItem__ButtonContainer}>
            <div
              className={styles.ButtonContainer__Play}
              onClick={handlePlayClick}
            >
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
                <span className={styles.VideoDetail__Main__Title}>
                  {video.title}
                </span>
                <span className={styles.VideoDetail__Main__Description}>
                  {video.long_description}
                </span>
              </div>
              <div className={styles.VideoItem__VideoDetails}>
                <span className={styles.VideoDetail_Title}>Duration:</span>
                <span className={styles.VideoDetail_Content}>
                  {video.duration_time}
                </span>
                <span className={styles.VideoDetail_Title}>Relese date:</span>
                <span className={styles.VideoDetail_Content}>
                  {video.release_year}
                </span>
                <span className={styles.VideoDetail_Title}>Genre:</span>
                <span className={styles.VideoDetail_Content}>
                  {video.genre}
                </span>
                <span className={styles.VideoDetail_Title}>
                  Age restriction:
                </span>
                <span className={styles.VideoDetail_Content}>
                  {video.fsk}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
