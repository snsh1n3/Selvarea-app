import React from 'react';

function Contact() {
  return (
    <section id="Contacto">
      <h2>Contacto</h2>
      <div className="content">
        <div className="text">
          <p>Comunicate con nosotros a través de WhatsApp, Instagram o TikTok</p>
        </div>
        <div className="image">
          <img src={`${process.env.PUBLIC_URL}/Imagenes/colibriBordado.png`} alt="Colibrí bordado a mano en una chaqueta" /> 
        </div>
      </div>
    </section>
  );
}

export default Contact;