import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Tutorials from './pages/Tutorials/Tutorials';
import Products from './pages/Products/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;