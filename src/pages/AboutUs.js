import React from 'react';

function AboutUs() {
  return (
    <section id="nosotros">
      <h2>Nosotros</h2>
      <div className="content">
        <div className="text">
          <p>Selvárea es una marca colombiana que celebra la riqueza natural del país a través de prendas únicas con bordados realistas de animales, hechos a mano por artesanos locales. Inspirada en la biodiversidad y los ecosistemas colombianos, Selvárea fusiona arte, sostenibilidad y diseño contemporáneo, creando piezas que son más que ropa: son un homenaje al patrimonio cultural y natural. Cada puntada cuenta una historia, destacando la conexión entre moda y conservación ambiental, mientras empodera a comunidades locales y preserva técnicas artesanales.</p>
        </div>
        <div className="image">
          <img src="/Imagenes/colibriBordado.png" alt="Colibrí bordado a mano en una chaqueta" /> 
        </div>
      </div>
    </section>
  );
}

export default AboutUs;