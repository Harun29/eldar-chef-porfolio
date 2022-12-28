import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return ( 
    <footer>
      <div className="user-info">
        <h4>Social:</h4>
        <button>
          <FontAwesomeIcon icon={faInstagram} size='3x'></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faFacebook} size='3x'></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faLinkedin} size='3x'></FontAwesomeIcon>
        </button>
      </div>
      <div className="developer-info">
        <p>Web developer's github: <a href="https://github.com/Harun29">Harun29</a></p>
      </div>
    </footer>
  );
}
 
export default Footer;