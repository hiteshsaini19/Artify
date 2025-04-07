import React, { useEffect, useState } from 'react';

const Exhibition = ({ match }) => {
    const [exhibition, setExhibition] = useState(null);
    const exhibitionId = match.params.id;

    useEffect(() => {
        const fetchExhibition = async () => {
            try {
                const response = await fetch(`/api/exhibitions/${exhibitionId}`);
                const data = await response.json();
                setExhibition(data);
            } catch (error) {
                console.error('Error fetching exhibition:', error);
            }
        };

        fetchExhibition();
    }, [exhibitionId]);

    if (!exhibition) {
        return <div>Loading...</div>;
    }

    return (
        <div className="exhibition">
            <h1>{exhibition.title}</h1>
            <h2>By {exhibition.artist}</h2>
            <p>{exhibition.description}</p>
            <div className="artworks">
                {exhibition.artworks.map((artwork) => (
                    <div key={artwork.id} className="artwork">
                        <img src={artwork.imageUrl} alt={artwork.title} />
                        <h3>{artwork.title}</h3>
                        <p>{artwork.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exhibition;