import logo from '../images/logo.svg';
import { useState, useEffect } from 'react';

function Navigation() {
const [activeSection, setActiveSection] = useState('');
const [activeNavigation, setActiveNavigation] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  const handleResize = () => {
    if (window.innerWidth > 640) {
      setActiveNavigation(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);


  const switchNavigation = () => {
    setActiveNavigation(!activeNavigation);
  }

  return (
    <header>
      <nav className={activeNavigation ? 'flex active' : 'flex'}>
        <a href="/" className='logo-link'>
          <img src={logo} className={activeNavigation ? 'hide' : 'App-logo'} alt="logo" />
        </a>
        <ul className='main-nav'>
          <li><a href="#main" className={activeSection === 'main' ? 'active' : ''}>POČETNA</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>USLUGE</a></li>
          <li><a href="https://koncert.hr/" className={activeSection === 'events' ? 'active' : ''}>ULAZNICE</a></li>
        </ul>
        <a href="#contact" className='button-primary'>KONTAKT</a>

        <div className={activeNavigation ? 'hamburger-menu hide' : 'hamburger-menu'} onClick={switchNavigation}>
              <div className={activeNavigation ? 'line rotate' : 'line'}></div>
              <div className='line'></div>
              <div className={activeNavigation ? 'line rotate' : 'line'}></div>
            </div>

        <div className={activeNavigation ? 'flexColumn' : 'hide'}>
          <div className='flexLogo'>
            <a href="/" className='logo-link'>
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <div className={activeNavigation ? 'hamburger-menu activated' : 'hamburger-menu'} onClick={switchNavigation}>
              <div className={activeNavigation ? 'line rotate' : 'line rotate'}></div>
              <div className={activeNavigation ? 'line hide' : 'line'}></div>
              <div className={activeNavigation ? 'line rotateOther' : 'line rotateOther'}></div>
            </div>
          </div>

          <div className={activeNavigation ? 'block' : 'hide'}>
            <ul>
              <hr className='first-nav-hr'/>
              <div className='flexLogo'>
                <h2>0/0</h2>
                <li><a href="#main" onClick={switchNavigation}>Naslovna</a></li>
              </div>
              <hr className='nav-hr'/>
              <div className='flexLogo'>
                <h2>0/1</h2>
                <li><a href="#services" onClick={switchNavigation}>Usluge</a></li>
              </div>
              <hr className='nav-hr'/>
              <div className='flexLogo'>
                <h2>0/2</h2>
                <li><a href="#logo" onClick={switchNavigation}>Oprema</a></li>
              </div>
              <hr className='nav-hr'/>
              <div className='flexLogo'>
                <h2>0/3</h2>
                <li><a href="#contact" onClick={switchNavigation}>Kontakt</a></li>
              </div>
              <hr className='nav-hr'/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
