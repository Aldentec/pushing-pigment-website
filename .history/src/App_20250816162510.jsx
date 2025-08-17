import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';
import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Tutorials from './pages/Tutorials/Tutorials';
import Products from './pages/Products/Products';
import GettingStarted from './pages/GettingStarted/GettingStarted';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tutorials" element={<Tutorials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;