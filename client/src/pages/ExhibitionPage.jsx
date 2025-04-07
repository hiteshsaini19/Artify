import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExhibitionDetails from '../components/ExhibitionDetails';

const ExhibitionPage = () => {
  const { id } = useParams();
  const [exhibition, setExhibition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExhibition = async () => {
      setLoading(true);
      setError(null);
      try {
        // Placeholder for API call - replace with actual API endpoint
        const response = await fetch(`/api/exhibitions/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExhibition(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchExhibition();
  }, [id]);

  if (loading) return <p>Loading exhibition...</p>;
  if (error) return <p>Error loading exhibition: {error.message}</p>;
  if (!exhibition) return <p>Exhibition not found.</p>;

  return (
    <ExhibitionDetails exhibition={exhibition} />
  );
};

export default ExhibitionPage;
