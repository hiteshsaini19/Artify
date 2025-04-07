import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await fetch('/api/artworks');
                const data = await response.json();
                setArtworks(data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        fetchArtworks();
    }, []);

    return (
        <div className="gallery">
            <h1>Art Gallery</h1>
            <div className="artwork-grid">
                {artworks.map((artwork) => (
                    <div key={artwork.id} className="artwork-card" tabIndex="0" aria-label={`Artwork titled ${artwork.title} by ${artwork.artist}`}>
                        <img src={artwork.imageUrl} alt={artwork.title} />
                        <h2>{artwork.title}</h2>
                        <p>{artwork.artist}</p>
                        <p>{artwork.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;