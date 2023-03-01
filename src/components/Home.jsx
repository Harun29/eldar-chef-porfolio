import { Link } from "react-router-dom";
import Food from "./home/Food";
import Lessons from "./home/Lessons";

const Home = () => {
  return (  
    <main>
        <div className="welcome 
        animate__animated 
        animate__fadeInDown 
        animate__faster">
          <div className="intro">
            <div className="greeting">
              <h1>Hello,</h1>
            </div>
            <h2>I'm <span>Chef</span> Eldar</h2>
            <p>I am a chef specializing in Italian and Mediterranean cuisine. I have perfected my skills in making pizzas and pastas, and have worked exclusively in high-end hotels. My portfolio showcases my ability to create visually stunning and delicious dishes using only the freshest ingredients.</p>
            <div className="first-button">
              <Link to="/about"><button>About me</button></Link>
            </div>
          </div>
        </div>

      <Food />

      <Lessons />
    </main>
  );
}
 
export default Home;