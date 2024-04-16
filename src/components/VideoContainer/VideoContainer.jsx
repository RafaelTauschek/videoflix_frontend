import React from 'react';
import Video from '../Video/VideoComponent';

export default function VideoContainer({videos}) {
    return (
        <div className="video-container">
            {videos.map((video, index) => {
                <Video key={index} video={video}/>
            })}
        </div>
    )
}