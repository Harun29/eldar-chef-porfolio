import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./pages/About";
import 'animate.css';
// import PrivateRoute from "./PrivateRoute";

function App() {

  return (
    <Router>
      <div className="App"> 
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pages/About" element={<About />}/>
              <Route path="/admin" element={<Login />}/>
              {/* <Route path='/admin/add-recepies' element={<PrivateRoute component={AddRecepie} />}/> */}
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
