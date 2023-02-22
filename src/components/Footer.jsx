import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="animate__animated animate__fadeInDown animate__faster">
      <div className="contact">
        <p>Phone number: +38761061061</p>
        <p>Email: eldarkarahmetovic@gmail.com</p>
      </div>
      <div className="user-info">
        <h4>Social:</h4>

        <a href="https://www.instagram.com/eldo_pb/">
          <button>
            <FontAwesomeIcon icon={faInstagram} size='2x'></FontAwesomeIcon>
          </button>
        </a>
        <a href="https://www.facebook.com/eldar.karahmetovic">
          <button>
            <FontAwesomeIcon icon={faFacebook} size='2x'></FontAwesomeIcon>
          </button>
        </a>

        <button>
          <FontAwesomeIcon icon={faLinkedin} size='2x'></FontAwesomeIcon>
        </button>

      </div>
      <div className="developer-info">
        <p>Web developer's github: <a href="https://github.com/Harun29">Harun29</a></p>
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </div>
    </footer>
  );
}
 
export default Footer;