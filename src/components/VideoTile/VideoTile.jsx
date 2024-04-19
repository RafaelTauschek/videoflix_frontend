import React from "react";
import styles from "./VideoTile.module.css";


export default function VideoTile({ video, index }) {
  const handleVideoClick = () => {
    console.log('Single Video should get opend!');
  }



  return (
    <div className={styles.VideoContainer} onClick={handleVideoClick}>
      <div className={styles.Video}>{video}</div>
      {/* <img src={thumbnail} alt={title}/> */}
    </div>
  );
}