import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Subscribe from './pages/Subscribe';
import GlobalStyles from './styles/GlobalStyles';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/subscribe" element={<Subscribe />} /> */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
