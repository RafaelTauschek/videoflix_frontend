import React from "react";
import styles from "./VideoTile.module.css";

export default function VideoTile({ video, index, handleVideoClick }) {
  const handleClick = () => {
    handleVideoClick(video);
  };

  return (
    <div className={styles.VideoContainer} onClick={handleClick}>
      <img
        className={styles.Video}
        src={"http://127.0.0.1:8000" + video.thumbnail}
        alt={video.title}
      />
    </div>
  );
}
