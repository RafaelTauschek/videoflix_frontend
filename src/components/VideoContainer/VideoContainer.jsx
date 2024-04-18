import React from 'react';
import Video from '../Video/VideoTile';
import styles from './VideoContainer.module.css'

export default function VideoContainer({ videos }) {
    return (
        <div className={styles.VideoContainer}>
            {videos.map((video, index) => (
                <Video key={index} video={video} />
            ))}
        </div>
    );
}