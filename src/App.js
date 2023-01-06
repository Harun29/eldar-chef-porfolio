import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./pages/About";
import { useState } from "react";

function App() {

  const [background, setBackground] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar background={background} />
          <div className="content">
            <Switch>
              <Route exact path={["/", "/components/Home"]}>
                <Home />
              </Route>
              <Route exact path="/pages/About">
                {setBackground(true)}
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
