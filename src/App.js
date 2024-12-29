import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import React, { useEffect } from 'react';
import Services from './components/Services';
import Events from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TextParallaxContentExample from './components/Example';

function App() {
  /*useEffect(() => {
    const handleMouseMove = (e) => {
      const grid = document.createElement('div');
      grid.className = 'grid';
      grid.style.top = `${e.clientY - 50}px`;  // Center the grid
      grid.style.left = `${e.clientX - 50}px`;

      // Create an image element
      const image = document.createElement('img');
      image.src = imagePhoto; // Replace with your image path
      image.alt = 'Grid Image'; // Alt text for accessibility
      image.className = 'grid-image'; // Add class for styling
      grid.appendChild(image);

      document.body.appendChild(grid);

      setTimeout(() => {
        document.body.removeChild(grid);
      }, 300); 
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);*/
  
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Gallery />
      <Services />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
