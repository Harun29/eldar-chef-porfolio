import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { currentUser } = useAuth

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
  <header 
  className={`${isScrolled||dropdown ? 'navbar active' : 'navbar'}${pathname !== '/' ? ' not-home' : ''}
  animate__animated 
  animate__fadeInDown 
  animate__faster`}>
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

    {dropdown ? (
      <nav 
        className="dropdown
        animate__animated 
        animate__fadeInDown 
        animate__faster">
  
        <div className="navigation">
          <Link to="/">
            <button onClick={handleDropdown}>Home</button>
          </Link>
        </div>
        
        <div className="navigation">
          <Link to="/about">
            <button onClick={handleDropdown}>About me</button>
          </Link>
        </div>
        
        <div className="navigation">
          <button>Recepies</button>
        </div>

        <div className="navigation">
          <button>Cooking lessons</button>
        </div>
      </nav>
    ) : null}
  </header>
  );
}
 
export default Navbar;