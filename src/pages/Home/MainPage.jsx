import React from "react";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";

export default function MainPage({ videos }) {
  return (
    <div className={styles.MainPageContainer}>
      <Header></Header>
      <VideoContainer videos={videos} />
      {/* Footer */}
    </div>
  );
}
