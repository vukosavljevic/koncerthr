import video from '../images/Hero.mp4'

function Hero() {
    return (
        <section id="main">
        <video  
  src={video}
  autoPlay
      playsInline
    >
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
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
