import logo from '../images/logo.svg'
import instagram from '../images/Instagram.svg'
import linkedin from '../images/Linkedin.svg'
import facebook from '../images/Facebook.svg'

const Footer = () => {
    return (
        <footer>
            <div className='upper-footer'>
            <div className='footer-logo'>
                <div>
                    <img src={logo} alt="Footer logo"/>
                    <p>+385 91 506 4844</p>
                    <p>Ul. cara Hadrijana 13, 31000 Osijek</p>
                    <p>koncert@koncert.hr</p>
                </div>
            </div>
            <div className='footer-navigation'>
                <div>
                    <p>Istraži</p>
                    <ul>
                        <li><a href="">Naslovna</a></li>
                        <li><a href="">Usluge</a></li>
                        <li><a href="">Ulaznice</a></li>
                        <li><a href="">Kontakt</a></li>
                    </ul>
                </div>
                <div>
                    <p>Društvene mreže</p>
                    <a href="https://www.linkedin.com/company/koncert-agencija/" className='footer-icon' target='_blank'>
                    <img src={linkedin} alt="Linkedin" />
                    </a>

                    <a href="https://www.facebook.com/koncert.hr/?locale=hr_HR" className='footer-icon' target='_blank'>
                    <img src={facebook} alt="Facebook" />
                    </a>

                    <a href="https://www.instagram.com/koncertagencija/" className='footer-icon' target='_blank'>
                    <img src={instagram} alt="Instagram" />
                    </a>

                </div>
            </div>
            </div>
            <hr />
            <div>
                <p>© 2024 Koncert.hr</p>
            </div>
        </footer>
    )
}

export default Footer;