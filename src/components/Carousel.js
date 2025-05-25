import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/Imagenes/image1.png",
    // Agrega más imágenes si las tienes, por ejemplo:
    // "/Imagenes/image2.png",
    // "/Imagenes/image3.png",
  ];

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  // Autoplay functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]); // Dependencias para el efecto

  return (
    <section id="carousel" className="carousel">
      <div className="carousel-container">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? 'active' : ''}
          />
        ))}
        <div className="controls">
          <span className="prev" onClick={() => showSlide(currentSlide - 1)}>❮</span>
          <span className="next" onClick={() => showSlide(currentSlide + 1)}>❯</span>
        </div>
      </div>
      <div className="features">
        <div><img src="/Imagenes/envios.png" alt="Ícono de envíos nacionales e internacionales" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Envíos nacionales e internacionales</div>
        <div><img src="/Imagenes/productoColombiano.png" alt="Ícono que representa un producto colombiano" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Producto 100% Colombiano</div>
        <div><img src="/Imagenes/hechoaMano.png" alt="Ícono que representa un producto hecho a mano" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Hecho a mano</div>
      </div>
    </section>
  );
}

export default Carousel;