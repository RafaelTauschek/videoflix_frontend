import React, { useState, useRef } from "react";
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ video }) {
  const BASE_URL = "http://127.0.0.1:8000";
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [resolution, setResolution] = useState("360p");
  const playerRef = useRef(null);

  const tooglePlayPause = () => {
    setPlaying(!playing);
    if (playerRef.current.paused) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  };

  const stopVideo = () => {
    setPlaying(false);
    playerRef.current.pause();
    playerRef.current.currentTime = 0;
  };

  const handleProgress = () => {
    const currentTime = playerRef.current.currentTime;
    setCurrentTime(Math.floor(currentTime));
  };

  const handleResolutionChange = (resolution) => {
    setResolution(resolution);
  };

  return (
    <div>
      {video && Object.keys(video).length > 0 && (
        <div>
          <video
            ref={playerRef}
            src={BASE_URL + video.resolutions[resolution].substring(1)}
            onTimeUpdate={handleProgress}
          ></video>
          <div>
            <button onClick={tooglePlayPause}>
              {playing ? "Pause" : "Play"}
            </button>
            <button onClick={stopVideo}>Stop</button>
            <div>
              <progress
                value={currentTime}
                max={playerRef.current ? playerRef.current.duration : 0}
              ></progress>
              <span>{currentTime.toFixed(2)}</span>
            </div>
            <div>
              <select
                onChange={(e) => handleResolutionChange(e.target.value)}
                value={resolution}
              >
                {Object.keys(video.resolutions).map((res) => (
                  <option key={res} value={res}>
                    {res}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
