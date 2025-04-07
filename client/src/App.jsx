import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ExhibitionPage from './pages/ExhibitionPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/exhibitions/:id" element={<ExhibitionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
