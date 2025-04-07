import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css'; // Import Gallery.css for styling

const ExhibitionList = ({ exhibitions }) => {
  return (
    <div className="exhibition-list">
      <h2>Current Exhibitions</h2>
      <div className="exhibitions-container">
        {exhibitions.map(exhibition => (
          <div key={exhibition._id} className="exhibition-card">
            <Link to={`/exhibitions/${exhibition._id}`}>
              <img src={exhibition.image} alt={exhibition.title} className="exhibition-image" />
              <h3>{exhibition.title}</h3>
              <p className="exhibition-artist">{exhibition.artistName}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionList;
