import React, { useState, useEffect } from 'react';
import ExhibitionList from '../components/ExhibitionList';

const HomePage = () => {
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExhibitions = async () => {
      setLoading(true);
      setError(null);
      try {
        // Placeholder for API call - replace with actual API endpoint
        const response = await fetch('/api/exhibitions');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExhibitions(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitions();
  }, []);

  if (loading) return <p>Loading exhibitions...</p>;
  if (error) return <p>Error loading exhibitions: {error.message}</p>;

  return (
    <div className="home-page">
      <ExhibitionList exhibitions={exhibitions} />
    </div>
  );
};

export default HomePage;
