import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/pages/About"
import Login from "./components/admin/Login";
import 'animate.css';
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import AddRecepie from "./components/admin/AddRecepie";

function App() {

  return (
    <AuthProvider>
    <Router>
      <div className="App"> 
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Login />} />
              <Route path='/add-recepies' element={<PrivateRoute component={AddRecepie} />}/>
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
