import React from 'react';
import ArtworkDetails from './ArtworkDetails';
import ArtistProfile from './ArtistProfile';
import '../styles/Gallery.css'; // Import Gallery.css for styling

const ExhibitionDetails = ({ exhibition }) => {
  return (
    <div className="exhibition-details-page">
      <div className="exhibition-header">
        <h1>{exhibition.title}</h1>
        <p className="exhibition-artist">Curated by {exhibition.curatorName}</p>
        <img src={exhibition.image} alt={exhibition.title} className="exhibition-image-header" />
        <p className="exhibition-description">{exhibition.description}</p>
      </div>
      <div className="exhibition-artists">
        <h2>Featured Artists</h2>
        <div className="artists-container">
          {exhibition.artists.map(artist => (
            <ArtistProfile key={artist._id} artist={artist} />
          ))}
        </div>
      </div>
      <div className="exhibition-artworks">
        <h2>Artworks in Exhibition</h2>
        <div className="artworks-container">
          {exhibition.artworks.map(artwork => (
            <ArtworkDetails key={artwork._id} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionDetails;
