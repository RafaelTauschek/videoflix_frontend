import React from 'react';
import styles from './VideoTitle.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function VideoTitle() {
    return (
        <div className={styles.TitleContainer}>
            <span className={styles.Title}>Movies</span>
            <div className={styles.Main}>
                <div className={styles.GenresContainer}>
                <span className={styles.GenresTitle}>Genres</span>
                {/* <ArrowDropDownIcon/> */}
                </div>
            </div>
        </div>
    );
}