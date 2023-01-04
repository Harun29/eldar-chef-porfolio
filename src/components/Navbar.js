import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isHome, setIsHome] = useState(true);

  const HandleLocationChange = () => {
    const location = useLocation();
    if (location.pathname !== '/'){
      setIsHome(false)
      console.log(isHome);
      console.log(location.pathname);
    } else {
      setIsHome(true)
    }
  };

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

  window.addEventListener('scroll', changeBackground)
  window.addEventListener('click', HandleLocationChange)

  return ( 
  <header className={`navbar${isHome ? `${isScrolled ? 'active' : ''}` : 'black'}`}>

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
          <button>Home</button>
        </div>

        <div className="navigation">
          <button>Contact</button>
        </div>

        <div className="navigation">
          <button>About me</button>
        </div>

        <div className="navigation">
          <button>Recepies</button>
        </div>
      </motion.nav>
    ) : null}
    </AnimatePresence>
  </header>
  );
}
 
export default Navbar;