import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMePage from './components/AboutMePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-portfolio" element={<Home />} />
        <Route path="/about-me" element={<AboutMePage /> } />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
