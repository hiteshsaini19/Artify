import React from 'react';
import '../styles/Gallery.css'; // Import Gallery.css for styling

const ArtworkDetails = ({ artwork }) => {
  return (
    <div className="artwork-details">
      <h2>{artwork.title}</h2>
      <h3>By {artwork.artistName}</h3>
      <img src={artwork.image} alt={artwork.title} className="artwork-image-detail" />
      <p className="artwork-description">{artwork.description}</p>
      <p className="artwork-medium">Medium: {artwork.medium}</p>
      <p className="artwork-year">Year: {artwork.year}</p>
    </div>
  );
};

export default ArtworkDetails;
