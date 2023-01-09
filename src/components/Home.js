import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Food from "./home/Food";
import Lessons from "./home/Lessons";

const Home = () => {
  return (  
    <main>
      <AnimatePresence>
      <motion.div className="welcome"
      initial={{y:-10, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{type: 'tween', duration: 0.5, ease: 'easeInOut'}}>
        <div className="intro">
          <div className="greeting">
            <h1>Hello,</h1>
          </div>
          <h2>I'm <span>Chef</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tortor in augue placerat luctus. Cras placerat, nisi in pulvinar imperdiet, ligula est vestibulum dui, vel semper velit mauris bibendum dui.</p>
          <div className="first-button">
            <Link to="../pages/About"><button>About me</button></Link>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>

      <Food />

      <Lessons />
    </main>
  );
}
 
export default Home;