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
  const { pathname } = useLocation();

  const handleDropdown = () => {
    setDropdown(!dropdown);
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
  <AnimatePresence> 
  <motion.header 
  className={`${isScrolled||dropdown ? 'navbar active' : 'navbar'}${pathname === '/pages/About' ? ' not-home' : ''}`}
  inital={{opacity: 0}}
  animate={{opacity: 1}}
  transition={{duration: 0.3}}>
      <div className="name">
        <h2>Lorem I.</h2>
      </div>

      <div className="menu-dropdown">
        <button onClick={handleDropdown}>
          {!dropdown ? (
          
          <AnimatePresence>
            <motion.div
              animate={{rotate: dropdown ? 360 : 0}}>
              <FontAwesomeIcon icon={faBars} size="xl" />
            </motion.div>
          </AnimatePresence>
          )
          : (
          <AnimatePresence>
            <motion.div
              animate={{rotate: dropdown ? 360 : 0}}>
              <FontAwesomeIcon icon={faArrowUp} size="xl" />
            </motion.div>
          </AnimatePresence>
          )}
        </button>
      </div>

    <AnimatePresence>
    {dropdown ? (
      <motion.nav 
        className="dropdown"
        initial={{y: -15, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{type: "tween", delay: 0.2, duration: 0.2, ease: 'easeInOut'}}>
  
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
  </motion.header>
  </AnimatePresence>
  );
}
 
export default Navbar;