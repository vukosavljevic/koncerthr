import video from '../images/Hero.mp4'

function Hero() {
    return (
        <section id="main">
        <video autoPlay muted loop webkit-playsinline="true" playsinline="true" autoplay="true" width="250">
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
