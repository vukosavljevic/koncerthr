import React, { useState, useEffect } from "react";
import image from '../images/dummy.png';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image2,
    image1,
    image3,
    image4,
    image
  ];

  
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY); // Capture the vertical scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
    <div className="custom-gallery">
      <div
        className="gallery-item gallery-item-1"
        style={{ transform: `translate(-${scrollOffset * 0.05}px, -${scrollOffset * 0.05}px)` }}
      >
        <img src={images[0]} alt="Gallery 1" />
      </div>
      <div
        className="gallery-item gallery-item-2"
        style={{ transform: `scale(${1 - scrollOffset * 0.0001})` }}
      >
        <img src={images[1]} alt="Gallery 2" />
      </div>
      <div
        className="gallery-item gallery-item-3"
        style={{ transform: `translate(${scrollOffset * 0.05}px, -${scrollOffset * 0.05}px)` }}
      >
        <img src={images[2]} alt="Gallery 3" />
      </div>
      <div
        className="gallery-item gallery-item-4"
        style={{ transform: `translate(-${scrollOffset * 0.05}px, ${scrollOffset * 0.05}px)` }}
      >
        <img src={images[3]} alt="Gallery 4" />
      </div>
      <div
        className="gallery-item gallery-item-5"
        style={{ transform: `translate(${scrollOffset * 0.05}px, ${scrollOffset * 0.05}px)` }}
      >
        <img src={images[4]} alt="Gallery 5" />
      </div>
    </div>
    </section>

  );
};

export default Gallery;

