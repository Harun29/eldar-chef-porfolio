import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              {/* just delete "/" from path, idk why but just do it and try to find another way around it */}
              <Route exat path={["/", "/components/Home"]} component={Home} />
              <Route exat path="/pages/About" component={About} />
            </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
