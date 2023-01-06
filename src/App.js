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
              <Route exact path={["/", "/components/Home"]}>
                <Home />
              </Route>
              <Route exact path="/pages/About">
                <About />
              </Route>
            </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
