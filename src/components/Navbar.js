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
  <header className={`${isScrolled ? 'navbar active' : 'navbar'}${pathname === '/components/Home' ? '' : ' not-home'}`}>

    <AnimatePresence>
    {!dropdown ? (
    <motion.nav
      initial={{opacity: 1}}
      animate={{opaciti: 0}}
      exit={{opacity: 1}}>
      <div className="name">
        <h2>Lorem I.</h2>
      </div>

      <div className="menu-dropdown">
        <button onClick={handleDropdown}><FontAwesomeIcon icon={faBars} size="xl" /></button>
      </div> 
    </motion.nav>) : null}
    </AnimatePresence>

    <AnimatePresence>
    {dropdown ? (
      <motion.nav 
        className="dropdown"
        initial={{y: -250}}
        animate={{y: 0}}
        transition={{type: "tween"}}
        exit={{y: -250}}>
        <div className="navigation">
          <button onClick={handleDropdown}>
            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
          </button>
        </div>

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