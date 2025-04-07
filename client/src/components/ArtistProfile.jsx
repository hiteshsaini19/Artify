import React from 'react';
import '../styles/Gallery.css'; // Import Gallery.css for styling

const ArtistProfile = ({ artist }) => {
  return (
    <div className="artist-profile">
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <h3>{artist.name}</h3>
      <p className="artist-bio">{artist.bio}</p>
      {artist.socialLinks && (
        <div className="artist-social">
          {artist.socialLinks.website && <a href={artist.socialLinks.website} target="_blank" rel="noopener noreferrer">Website</a>}
          {artist.socialLinks.instagram && <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
          {artist.socialLinks.twitter && <a href={artist.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;
