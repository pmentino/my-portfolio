import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container">
    <a className="navbar-brand" href="/">My Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
