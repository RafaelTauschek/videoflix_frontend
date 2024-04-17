import React from 'react';
import styles from "./VideoTile.module.css";
export default function Video({video, index}) {
    return (
        <div className={styles.video}>
            <div>{video}</div>
            {/* <img src={thumbnail} alt={title}/> */}
        </div>
    )
}