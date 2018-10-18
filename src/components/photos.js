import React from 'react';
import './photos.scss';

export default function Photos({ photos, onImageClick }) {
    return (
        <div className="photos-grid">
            {photos.map(photo => (
                <article key={photo.id}>
                    <a
                        href="#"
                        onClick={onImageClick}
                        className="photos-grid__link"
                        id={photo.id}
                    >
                        <figure
                            className="absolute-bg"
                            style={{
                                backgroundImage: `url(http://farm${photo.farm}.staticflickr.com/` +
                                `${photo.server}/${photo.id}_${photo.secret}.jpg)`
                            }}
                        />
                    </a>
                </article>
            ))}
        </div>
    )
}
