import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const changeBackground = () => {
    if (window.scrollY >= 35){
      setNavbar(true);
    } else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  return ( 
  <AnimatePresence>
  <motion.header 
    className={navbar ? 'navbar active' : 'navbar'}
    initial={navbar ? {opacity: 0} : {opacity: 0}}
    animate={navbar ? {opacity: 1} : {opacity: 1}}
    exit={navbar ? {opacity: 0} : {opacity: 0}}>

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
        animate={{y: 0}}
        initial={{y: -250}}
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
  </motion.header>
  </AnimatePresence>
  );
}
 
export default Navbar;