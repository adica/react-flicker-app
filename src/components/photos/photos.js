import React from 'react';
import './photo';
import './photos.scss';
import Photo from './photo';

export default function Photos({ type, photos, selectedPhotos, selectionMode, onImageClick }) {
    return (
        <div className="photos-grid">
            {photos.map(photo => (
                <Photo
                    key={photo.id}
                    type={type}
                    photo={photo}
                    selectionMode={selectionMode}
                    isSelected={selectedPhotos.indexOf(photo.id) > -1}
                    onImageClick={onImageClick}
                />
            ))}
        </div>
    )
}
