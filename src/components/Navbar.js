import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return ( 
    <nav>
      <div className="name">
        <h2>Eldar K.</h2>
      </div>

      <div className="menu-dropdown">
        <FontAwesomeIcon icon={faBars} size="xl" />
      </div>

    </nav>
   );
}
 
export default Navbar;