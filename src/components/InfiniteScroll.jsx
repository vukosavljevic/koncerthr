import React, { useEffect, useRef } from "react";
import taf from '../images/taf_w_2024.png';
import rcf from '../images/rcflogo.png';
import shure from '../images/shure.png';
import robe from '../images/robe.png';
import fos from '../images/fos.png';
import kv from '../images/kv3.png';
import midas from '../images/midas.png';


const ScrollingMenu = () => {
  
    return (
      <div className="logos" id="logo">
        <div className="logos-slide">
          <a href="https://eu.taf.cz/" target="blank">
          <img src={taf} alt={`Logo ${1}`} key={1}/>
          </a>
          <a href="https://www.rcf.it/en/home" target="blank">
          <img src={rcf} alt={`Logo ${2}`} key={2}/>
          </a>
          <a href="https://www.shure.com/en-EU" target="blank">
          <img src={shure} alt={`Logo ${3}`} key={3}/>
          </a>
          <a href="https://www.robe.cz/" target="blank">
          <img src={robe} alt={`Logo ${5}`} key={5}/>
          </a>
          <a href="https://www.fos-lighting.eu/" target="blank">
          <img src={fos} alt={`Logo ${6}`} key={6}/>
          </a>
          <a href="https://www.kv2audio.com/" target="blank">
          <img src={kv} alt={`Logo ${7}`} key={7}/>
          </a>
          <a href="hhttps://www.midasconsoles.com/" target="blank">
          <img src={midas} alt={`Logo ${8}`} key={8}/>
          </a>
          <a href="https://www.shure.com/en-EU" target="blank">
          <img src={shure} alt={`Logo ${3}`} key={3}/>
          </a>
          <a href="https://www.robe.cz/" target="blank">
          <img src={robe} alt={`Logo ${5}`} key={5}/>
          </a>
        </div>
        <div className="logos-slide">
          <a href="https://eu.taf.cz/" target="blank">
          <img src={taf} alt={`Logo ${1}`} key={1}/>
          </a>
          <a href="https://www.rcf.it/en/home" target="blank">
          <img src={rcf} alt={`Logo ${2}`} key={2}/>
          </a>
          <a href="https://www.shure.com/en-EU" target="blank">
          <img src={shure} alt={`Logo ${3}`} key={3}/>
          </a>
          <a href="https://www.robe.cz/" target="blank">
          <img src={robe} alt={`Logo ${5}`} key={5}/>
          </a>
          <a href="https://www.fos-lighting.eu/" target="blank">
          <img src={fos} alt={`Logo ${6}`} key={6}/>
          </a>
          <a href="https://www.kv2audio.com/" target="blank">
          <img src={kv} alt={`Logo ${7}`} key={7} />
          </a>
          <a href="hhttps://www.midasconsoles.com/" target="blank">
          <img src={midas} alt={`Logo ${8}`} key={8}/>
          </a>
          <a href="https://www.shure.com/en-EU" target="blank">
          <img src={shure} alt={`Logo ${3}`} key={3}/>
          </a>
          <a href="https://www.robe.cz/" target="blank">
          <img src={robe} alt={`Logo ${5}`} key={5}/>
          </a>
        </div>
      </div>
    );
  };

export default ScrollingMenu;
