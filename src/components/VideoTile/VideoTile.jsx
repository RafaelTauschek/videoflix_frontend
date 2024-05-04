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
        src={"http://rafael-max.developerakademie.org/" + video.thumbnail}
        alt={video.title}
      />
    </div>
  );
}
