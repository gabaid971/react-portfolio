import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ReactGA from 'react-ga';

ReactGA.initialize('G-YJX74X49XQ');

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;