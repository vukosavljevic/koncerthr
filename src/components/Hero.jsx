import video from '../images/Hero.mp4'
function Hero() {
    return (
        <section id="main">
            <video src={video} autoplay autoPlay playsinline  oncontextmenu="return false;"  preload="auto" muted defaultMuted loop></video>
            <div className='overlay-title'>
                <h1 className='mb-1'>Sve za vaš <br />nezaboravan <br />event</h1>
                <p className='overlay-text'>Oprema, produkcija i ulaznice na jednom mjestu</p>
                <a href="#contact" className='button-primary'>ORGANIZIRAJ EVENT</a>
            </div>
        </section>
    );
}

export default Hero;
