import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  return ( 
    <AnimatePresence>
    <motion.footer
    initial={{y: -10, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{type: 'tween', duration: 0.2, delay: 0.8}}>
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
    </motion.footer>
    </AnimatePresence>
  );
}
 
export default Footer;