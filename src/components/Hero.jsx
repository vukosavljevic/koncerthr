import video from '../images/Hero.mp4'
function Hero() {
    return (
        <main>
            <video src={video} autoPlay muted loop></video>
            <div className='overlay-title'>
                <h1 className='mb-1'>Sve za vaš nezaboravan event</h1>
                <p className='overlay-text'>Oprema, produkcija i ulaznice na jednom mjestu</p>
                <a href="/" className='button-primary'>ORGANIZIRAJ EVENT</a>
            </div>
        </main>
    );
}

export default Hero;
