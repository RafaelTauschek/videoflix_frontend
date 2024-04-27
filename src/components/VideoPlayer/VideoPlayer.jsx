import React, { useState, useRef, useEffect } from "react";
import styles from "./VideoPlayer.module.css";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SettingsIcon from "@mui/icons-material/Settings";

export default function VideoPlayer({ video, returnFromVideoPlayer }) {
  const BASE_URL = "http://127.0.0.1:8000";
  const [currentTime, setCurrentTime] = useState(0);
  const [resolution, setResolution] = useState("1080p");
  const playerRef = useRef(null);
  const [settingMenu, setSettingMenu] = useState(false);
  const [showHud, setShowHud] = useState(true)
  const [hideTimer, setHideTimer] = useState(null)


  const showHudWithTimeout = () => {
    setShowHud(true);
    clearTimeout(hideTimer);
    const timer = setTimeout(() => setShowHud(false), 3000);
    setHideTimer(timer);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHud(false);
    }, 3000);
    setHideTimer(timer);
  
    return () => clearTimeout(timer);
  }, [showHud]);

  const handleMouseMove = () => {
    if (!showHud) {
      showHudWithTimeout();
    }
  }

  const playVideo = () => {
    playerRef.current.play();
  }

  const stopVideo = () => {
    playerRef.current.pause();
  }


  const handleProgress = () => {
    const currentTime = playerRef.current.currentTime;
    setCurrentTime(Math.floor(currentTime));
  };

  const handleResolutionChange = (resolution) => {
    setResolution(resolution);
    setSettingMenu(false);
  };

  const [value, setValue] = useState(30);

  const handleVolumeChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSettingClick = () => {
    setSettingMenu(!settingMenu);
  };

  const handleBackClick = () => {
    returnFromVideoPlayer();
  };




  const handleProgressSlider = (event, newValue) => {
    playerRef.current.pause();
    setCurrentTime(newValue);
    playerRef.current.currentTime = newValue;
    playerRef.current.play();
  };

  return (
    <div className={styles.VideoPlayer__Wrapper} onMouseMove={handleMouseMove}>
      {video && Object.keys(video).length > 0 && (
        <div className={styles.VideoPlayer__Container}>
          {showHud && (
            <div className={styles.Hud}>
            <div className={styles.Hud__Top}>
              <ArrowBackIosIcon className={styles.ArrowBack} onClick={handleBackClick} />
              <span className={styles.Hud__Top__Title}>
                {video.video.title}
              </span>
            </div>
            <div className={styles.Hud__Bottom}>
              <div className={styles.Hud__Bottom__Controls}>
                <div className={styles.Controls__Mid}>
                  <PlayArrowIcon className={styles.PlayIcon} onClick={playVideo} />
                  <PauseIcon className={styles.PauseIcon} onClick={stopVideo} />
                </div>
                <div className={styles.Controls__Right}>
                  <div className={styles.Volume__Container}>
                    <VolumeUp />
                    <VolumeOffIcon />
                  </div>
                  <div className={styles.Setting__Container}>
                  {settingMenu && (
                      <div className={styles.Setting__Menu}>
                        <span onClick={() => handleResolutionChange("360p")}>360p</span>
                        <span onClick={() => handleResolutionChange("720p")}>720p</span>
                        <span onClick={() => handleResolutionChange("1080p")}>1080p</span>
                      </div>
                    )}
                    <SettingsIcon onClick={handleSettingClick} />
                  </div>
                </div>
              </div>

              <div className={styles.Hud__Bottom__Slider}>
                <Slider
                  size="small"
                  value={currentTime}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  onChange={handleProgressSlider}
                  min={0}
                  max={video.video.duration_time}
                  color="white"
                />
              </div>
            </div>
          </div>
          )}
          

          <div className={styles.VideoPlayer}>
            <video
              className={styles.Video}
              ref={playerRef}
              src={BASE_URL + video.resolutions[resolution].substring(1)}
              onTimeUpdate={handleProgress}
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}
