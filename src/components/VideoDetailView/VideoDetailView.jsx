import React, { useEffect, useState } from "react";
import styles from "./VideoDetailView.module.css";
import { get } from "../../services/http";

export default function VideoDetailView({ video, handleBackButtonClick }) {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [videoDetail, setVideoDetail] = useState({});

  const handleBackClick = () => {
    handleBackButtonClick();
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
    <div>
      <span onClick={handleBackClick}>X</span>
      {/* All rendering should go in here */}
      {videoDetail && Object.keys(videoDetail).length > 0 && (
        <span>{videoDetail.video.title}</span>





      )}
    </div>
  );
}
