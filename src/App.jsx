import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpareParts from './pages/SpareParts';
import ProductDetail from './pages/ProductDetail';
import RepairHub from './pages/RepairHub';
import Checkout from './pages/Checkout';
import KeepClub from './pages/KeepClub';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spare-parts" element={<SpareParts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/repair-hub" element={<RepairHub />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/keep-club" element={<KeepClub />} />
              <Route path="/smartphones" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
