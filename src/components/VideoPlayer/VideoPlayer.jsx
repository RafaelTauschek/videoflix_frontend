import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ video }) {
    const BASE_URL = "http://127.0.0.1:8000";
    const [playing, setPlaying] = useState(false);
    const [resolution, setResolution] = useState('360p');

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleResolutionChange = (newResolution) => {
        setResolution(newResolution);
    };

    return (
        <div className={styles.VideoPlayer__Wrapper}>
            {video && Object.keys(video).length > 0 && (
                <div className={styles.VideoPlayer}>
                    <ReactPlayer
                        url={BASE_URL + video.resolutions[resolution].substring(1)}
                        playing={playing}
                        controls={true}
                        height={'100%'}
                        width={'100%'}
                    />
                    <button onClick={handlePlayPause}>
                        {playing ? 'Pause' : 'Play'}
                    </button>
                    <select onChange={(e) => handleResolutionChange(e.target.value)}>
                        {Object.keys(video.resolutions).map((res) => (
                            <option key={res} value={res}>
                                {res}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}