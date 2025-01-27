import video from '../images/Hero.mp4'
import { useState, useEffect } from 'react';
import image from '../images/Hero.jpg';
function Hero() {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          setIsIOS(true);
        }
        console.log(isIOS);
      }, []);
    return ( 
        <section id="main">
        isIOS ?             <img src={image} alt="People jumping hero image"/>
 : <video autoPlay muted loop playsInline  >
  <source src={video} type="video/mp4" />
</video> 

         <div className="video-overlay"></div>
            <div className='overlay-title'>
                <h1 className='mb-1'>Sve za vaš <br />nezaboravan <br />event</h1>
                <p className='overlay-text'>Oprema, produkcija i ulaznice na jednom mjestu</p>
                <a href="#contact" className='button-primary'>ORGANIZIRAJ EVENT</a>
            </div>
        </section>
    );
}

export default Hero;
