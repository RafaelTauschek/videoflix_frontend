import React from 'react';
import styles from './VideoContainer.module.css'
import VideoTile from '../VideoTile/VideoTile';

export default function VideoContainer({ videos }) {
    if (!videos) {
        console.log(videos);
        return null
    } else {
        console.log(videos);
    }
    return (
        <div className={styles.VideoContainer}>
            {videos.map((video, index) => (
                <VideoTile key={index} video={video} />
            ))}
        </div>
    );
}