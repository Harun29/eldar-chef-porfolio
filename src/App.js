import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./pages/About";
import 'animate.css';

function App() {

  return (
    <Router>
      <div className="App"> 
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pages/About" element={<About />}/>
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
