import React from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  return (
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/tienda" element={<Shop />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;