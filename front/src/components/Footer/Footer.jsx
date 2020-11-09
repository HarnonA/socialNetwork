import './styles.css';

import logo from '../assets/logo.png'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'

function Footer() {
    return (
        <div className="Footer">
            <div className="contact">
                <p>101, Some Fictional Street</p>
                <p>Big Tower, room 1000</p>
                <p>São Paulo, SP, Brazil</p>
                <p>Phone: +55 11 123456789</p>
            </div>
            <div className="imageLogo">
                {/* <p>VeganHive</p> */}
                <img src={logo} alt="veganhive" />
            </div>
            <div className="social">
            <a href="https://www.instagram.com/veganhive/"><img src={instagram} alt="instagram" width={21} /></a>
                <a href="https://www.facebook.com/veganhive/"><img src={facebook} alt="facebook" /></a>

            </div>
        </div>


    );
}

export default Footer;
