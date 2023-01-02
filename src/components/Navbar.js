import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return ( 
  <header>
    {!dropdown ? (
    <nav>
      <div className="name">
        <h2>Lorem I.</h2>
      </div>

      <div className="menu-dropdown">
        <button onClick={handleDropdown}><FontAwesomeIcon icon={faBars} size="xl" /></button>
      </div> 
    </nav>) : null}

    {dropdown ? (
      <motion.nav 
        className="dropdown"
        animate={{y: 0}}
        initial={{y: -500}}>
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
  </header>
  );
}
 
export default Navbar;