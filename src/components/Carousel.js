import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/Imagenes/image1.png",
  ];

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000); 
    return () => clearInterval(interval);
  }, [currentSlide, slides.length])

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
        <div><img src={`${process.env.PUBLIC_URL}/Imagenes/envios.png`} alt="Ícono de envíos nacionales e internacionales" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Envíos nacionales e internacionales</div>
        <div><img src={`${process.env.PUBLIC_URL}/Imagenes/productoColombiano.png`} alt="Ícono que representa un producto colombiano" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Producto 100% Colombiano</div>
        <div><img src={`${process.env.PUBLIC_URL}/Imagenes/hechoaMano.png`} alt="Ícono que representa un producto hecho a mano" style={{ width: '33px', height: '33px', verticalAlign: 'middle' }} /> Hecho a mano</div>
      </div>
    </section>
  );
}

export default Carousel;