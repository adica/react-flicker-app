import React from 'react';

export default function Photos({ photos }) {
    return (
        <div className="photos">
            {photos.map(photo => (
                <div
                    className="photo"
                    key={photo.id}
                    style={{
                        backgroundImage: `url(http://farm${photo.farm}.staticflickr.com/` +
                        `${photo.server}/${photo.id}_${photo.secret}.jpg)`
                    }}
                >
                </div>
            ))}
        </div>
    )
}
