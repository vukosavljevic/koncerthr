import React, { useEffect, useRef } from "react";
import taf from '../images/taf.jpeg';
const ScrollingMenu = () => {
    const logos = [
      taf,
      taf,
      taf,
      taf,
      taf,
      taf,
      taf,
      taf,
    ];
  
    return (
      <div className="logos" id="logo">
        <div className="logos-slide">
            <img src={taf} alt={`Logo ${1}`} key={1} />
            <img src={taf} alt={`Logo ${2}`} key={2} />
            <img src={taf} alt={`Logo ${3}`} key={13} />
            <img src={taf} alt={`Logo ${4}`} key={14} />
            <img src={taf} alt={`Logo ${5}`} key={15} />
            <img src={taf} alt={`Logo ${6}`} key={16} />
            <img src={taf} alt={`Logo ${4}`} key={14} />
            <img src={taf} alt={`Logo ${5}`} key={15} />
            <img src={taf} alt={`Logo ${6}`} key={16} />
        </div>
        <div className="logos-slide">
            <img src={taf} alt={`Logo ${1}`} key={1} />
            <img src={taf} alt={`Logo ${2}`} key={2} />
            <img src={taf} alt={`Logo ${3}`} key={13} />
            <img src={taf} alt={`Logo ${4}`} key={14} />
            <img src={taf} alt={`Logo ${5}`} key={15} />
            <img src={taf} alt={`Logo ${6}`} key={16} />
            <img src={taf} alt={`Logo ${4}`} key={14} />
            <img src={taf} alt={`Logo ${5}`} key={15} />
            <img src={taf} alt={`Logo ${6}`} key={16} />
        </div>
      </div>
    );
  };

export default ScrollingMenu;
