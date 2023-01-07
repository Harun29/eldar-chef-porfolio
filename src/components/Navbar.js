import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [icon, setIcon] = useState(true);

  const { pathname } = useLocation();

  const handleDropdown = () => {
    setDropdown(!dropdown);
    setIcon(!icon)
  };

  const changeBackground = () => {
    if (window.scrollY >= 35){
      setIsScrolled(true);
    } else{
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return ( 
  <header className={`${isScrolled||dropdown ? 'navbar active' : 'navbar'}${pathname === '/pages/About' ? ' not-home' : ''}`}>
      <div className="name">
        <h2>Lorem I.</h2>
      </div>

      <div className="menu-dropdown">
        <button onClick={handleDropdown}>
          {icon ? (<FontAwesomeIcon icon={faBars} size="xl" />)
          : (<FontAwesomeIcon icon={faArrowUp} size="xl" />)}
        </button>
      </div>

    <AnimatePresence>
    {dropdown ? (
      <motion.nav 
        className="dropdown"
        initial={{y: -15, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        // exit={{y: -15}}
        transition={{type: "tween", delay: 0.01}}>
  
        <div className="navigation">
          <Link to="../components/Home">
            <button onClick={handleDropdown}>Home</button>
          </Link>
        </div>
        
        <div className="navigation">
          <Link to="../pages/About">
            <button onClick={handleDropdown}>About me</button>
          </Link>
        </div>
        
        <div className="navigation">
          <button>Recepies</button>
        </div>

        <div className="navigation">
          <button>Cooking lessons</button>
        </div>
      </motion.nav>
    ) : null}
    </AnimatePresence>
  </header>
  );
}
 
export default Navbar;