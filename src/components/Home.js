import { Link } from "react-router-dom";
import Food from "./Food";

const Home = () => {
  return (  
    <main>
      <div className="welcome">
        <div className="intro">
          <div className="greeting">
            <h1>Hello,</h1>
          </div>
          <h2>I'm <span>Chef</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tortor in augue placerat luctus. Cras placerat, nisi in pulvinar imperdiet, ligula est vestibulum dui, vel semper velit mauris bibendum dui.</p>
          <div className="first-button">
            <button><Link to="/">My resume</Link></button>
          </div>
        </div>
      </div>
      <Food />

    </main>
  );
}
 
export default Home;