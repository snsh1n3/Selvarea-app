import React from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom'; // Usar Link como RouterLink para evitar conflictos
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  return (
    // <CartProvider> // Si el proveedor no se envuelve en index.js
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/tienda" element={<Shop />} />
            <Route path="/contacto" element={<Contact />} />
            {/* Si tuvieras una página de contacto */}
            {/* <Route path="/contacto" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    // </CartProvider>
  );
}

export default App;