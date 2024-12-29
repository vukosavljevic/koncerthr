import logo from '../images/logo.svg';
import { useState, useEffect } from 'react';

function Navigation() {
  const [activeSection, setActiveSection] = useState('');

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <header>
        <nav className='flex'>
          <a href="/" className='logo-link'>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <ul>
              <li><a href="#main" className={activeSection === 'main' ? 'active' : ''}>POČETNA</a></li>
              <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>USLUGE</a></li>
              <li><a href="#events" className={activeSection === 'events' ? 'active' : ''}>ULAZNICE</a></li>
          </ul>
          <a href="#contact" className='button-primary'>KONTAKT</a>
          <div className='hamburger-menu'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
          </div>
        </nav>
      </header>
  );
}

export default Navigation;
