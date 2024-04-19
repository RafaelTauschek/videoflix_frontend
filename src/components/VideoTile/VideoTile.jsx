import React from "react";
import styles from "./VideoTile.module.css";

export default function VideoTile({ video, index }) {
  const handleVideoClick = () => {
    console.log("Single Video should get opend!");

    /**
     * TODO:
     * Open the detail view of the single Video
     *
     */
  };

  return (
    <div className={styles.VideoContainer} onClick={handleVideoClick}>
      <img
        className={styles.Video}
        src={"http://127.0.0.1:8000" + video.thumbnail}
        alt={video.title}
      />
    </div>
  );
}
