import logo from '../images/logo.svg'
function Navigation() {
  return (
      <header>
        <nav className='flex'>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
              <li><a href="/">POČETNA</a></li>
              <li><a href="">USLUGE</a></li>
              <li><a href="/">ULAZNICE</a></li>
          </ul>
          <a href="/" className='button-primary'>KONTAKT</a>
        </nav>
      </header>
  );
}

export default Navigation;
