import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/pages/About"
import Login from "./components/admin/Login";
import 'animate.css';
import { AuthProvider } from "./context/AuthContext";
// import PrivateRoute from "./PrivateRoute";

function App() {

  return (
    <AuthProvider>
    <Router>
      <div className="App"> 
        <Navbar />
          <div className="content">
            <Routes>
              <Route path={["/", "/components/home"]} element={<Home />} />
              <Route path="/pages/about" element={<About />}/>
              <Route path="/admin" element={<Login />}/>
              {/* <Route path='/admin/add-recepies' element={<PrivateRoute component={AddRecepie} />}/> */}
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
