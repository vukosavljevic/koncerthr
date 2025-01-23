import video from '../images/Hero.mp4'
import { useEffect, useState } from 'react';
import image from '../images/dummy.png';

function useDeviceType() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice = /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|iemobile/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    return isMobile;
}
function Hero() {
    const isMobile = useDeviceType();

    return (
        <section id="main">
        {isMobile ?<img src={image} alt="" style={{height: '100vh', width: '100vw'}}/> : <video autoPlay muted loop playsInline width="250">
  <source src={video} type="video/mp4" />
</video>}
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
