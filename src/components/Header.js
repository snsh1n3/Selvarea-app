import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Modal from './Modal';
import useSearch from '../hooks/useSearch';
import { useCart } from '../context/CartContext';

function Header() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { cartItems } = useCart();
  const { searchQuery, searchResults, performSearch, handleSearchInputChange } = useSearch();

  const handleOpenSearchModal = () => setIsSearchModalOpen(true);
  const handleCloseSearchModal = () => setIsSearchModalOpen(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const phoneNumber = "573105620190";
    const baseMessage = "Hola, estoy interesado en comprar los siguientes productos:\n\n";
    const productDetails = cartItems
      .map((item, index) => `${index + 1}. ${item.name} - $${parseInt(item.price).toLocaleString()}`)
      .join("\n");

    const total = cartItems.reduce((sum, item) => sum + parseInt(item.price), 0);
    const totalMessage = `\n\nTotal: $${total.toLocaleString()}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(baseMessage + productDetails + totalMessage)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <header>
      <div className="top-bar">Arte salvaje en cada puntada</div>
      <nav>
        <div className="nav-left">
          <RouterLink to="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/Imagenes/logo1.png`} alt="Logo de Selvárea" className="logo-img" />
          </RouterLink>
        </div>
        <ul className="nav-center">
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li><RouterLink to="/nosotros">Nosotros</RouterLink></li>
          <li><RouterLink to="/tienda">Tienda</RouterLink></li>
          <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        </ul>
        <div className="nav-right">
          <button onClick={handleOpenSearchModal}>
            <img src={`${process.env.PUBLIC_URL}/Imagenes/search-icon.png`} alt="Buscar" className="nav-icon" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Buscar
          </button>
          <button onClick={handleOpenLoginModal}>
            <img src="/Imagenes/profile-icon.png" alt="Perfil" className="nav-icon" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Perfil
          </button>
          <button onClick={handleCartClick}>
            <img src="/Imagenes/cart-icon.png" alt="Carrito" className="nav-icon" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Carrito ({cartItems.length})
          </button>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <Modal onClose={handleCloseSearchModal}>
          <h2>Buscar en Selvárea</h2>
          <input
            type="text"
            id="search-input"
            placeholder="Escribe aquí tu búsqueda"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button onClick={performSearch}>Buscar</button>
          <div id="search-results">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <p key={index}>Coincidencia encontrada: "{result}"</p>
              ))
            ) : (
              <p>No se encontraron resultados.</p>
            )}
          </div>
        </Modal>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <Modal onClose={handleCloseLoginModal}>
          <h2>Iniciar Sesión</h2>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" placeholder="Ingresa tu usuario" />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" />
          <button>Entrar</button>
        </Modal>
      )}
    </header>
  );
}

export default Header;