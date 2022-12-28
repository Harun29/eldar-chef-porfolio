import { Link } from "react-router-dom";

const Home = () => {
  return (  
    <main>
      <div className="welcome">
        <div className="intro">
          <h1>Hello,</h1>
          <h2>I'm Eldar Karahmetovic</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tortor in augue placerat luctus. Cras placerat, nisi in pulvinar imperdiet, ligula est vestibulum dui, vel semper velit mauris bibendum dui.</p>
          <button><Link>Learn more about me</Link></button>
        </div>
      </div>


    </main>
  );
}
 
export default Home;