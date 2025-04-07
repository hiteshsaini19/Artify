import React from 'react';
import './About.css'; // Import About.css for styling

const About = () => {
    return (
        <div className="about-page">
            <h1>About the Virtual Art Gallery</h1>
            <p>Welcome to Artify, your virtual destination for exploring art from around the globe.
            Our mission is to connect artists and art lovers in a digital space that showcases diverse collections
            of paintings, sculptures, and multimedia installations.</p>

            <h2>Our Vision</h2>
            <p>To make art accessible to everyone, everywhere. We believe in the power of art to inspire, educate,
            and connect people. Through Artify, we aim to break down geographical barriers and create a global community
            of art enthusiasts and creators.</p>

            <h2>What We Offer</h2>
            <ul>
                <li><b>Diverse Art Collections:</b> Explore a wide range of artistic styles and mediums.</li>
                <li><b>Artist Showcases:</b> Discover talented artists and learn about their creative journeys.</li>
                <li><b>Interactive Exhibitions:</b> Engage with art through virtual tours and interactive features.</li>
                <li><b>Community Engagement:</b> Connect with artists and other art lovers through comments and discussions.</li>
            </ul>

            <h2>For Artists</h2>
            <p>Artify provides a platform for artists to exhibit their work to a global audience. Create your digital exhibition,
            share your stories, and connect with viewers who appreciate your art.</p>

            <h2>For Art Lovers</h2>
            <p>Dive into the world of art from the comfort of your home. Discover new artists, explore different art forms,
            and engage with a community of like-minded individuals.</p>

            <h2>Join Us</h2>
            <p>Whether you are an artist or an art enthusiast, Artify invites you to be part of our growing community.
            Let's explore the boundless world of art together.</p>
        </div>
    );
};

export default About;
