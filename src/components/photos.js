import React from 'react';
import './photo';
import './photos.scss';
import Photo from './photo';


export default function Photos({ photos, onImageClick }) {
    return (
        <div className="photos-grid">
            {photos.map(photo => (
                <Photo
                    key={photo.id}
                    photo={photo}
                    onImageClick={onImageClick}
                />
            ))}
        </div>
    )
}
