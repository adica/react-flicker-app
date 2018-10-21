import React from 'react';
import Video from './video';

export default function Videos({ type, videos, onVideoClick }) {
    return (
        <div className="photos-grid">
            {videos.map(video => (
                <Video
                    key={video.id}
                    video={video}
                    onVideoClick={onVideoClick}
                />
            ))}
        </div>
    )
}
