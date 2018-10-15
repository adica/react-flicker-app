import React from 'react';

export default function Photos({ photos, onImageClick }) {
    return (
        <div className="photos">
            {photos.map(photo => (
                <button
                    onClick={onImageClick}
                    className="photo"
                    key={photo.id}
                    id={photo.id}
                    style={{
                        backgroundImage: `url(http://farm${photo.farm}.staticflickr.com/` +
                        `${photo.server}/${photo.id}_${photo.secret}.jpg)`
                    }}
                >
                </button>
            ))}
        </div>
    )
}
