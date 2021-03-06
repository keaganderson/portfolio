import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles.css';

import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
import NotFound from './components/error';
import Decision from './components/decision'
import Pentago from './components/pentago';
import Sliding from './components/sliding';
import Runic from './components/runic';
import Bayes from './components/bayes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-decision" element={<Decision />} />
          <Route path="/project-pentago" element={<Pentago />} />
          <Route path="/project-sliding" element={<Sliding />} />
          <Route path="/project-bayes" element={<Bayes />} />
          <Route path="/project-runic" element={<Runic />} />
          <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));