import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios'; // Para peticiones HTTP

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulación de una petición a una API REST para obtener productos
    const fetchProducts = async () => {
      try {
        // Si tuvieras una API real, la URL iría aquí.
        // Ejemplo con una API mock:
        // const response = await axios.get('https://my-json-server.typicode.com/your-username/your-repo/products');
        // Para este ejemplo, simulamos los datos directamente:
        const mockProducts = [
          { id: 1, name: "Love Birds", price: "800000", image: "/Imagenes/jacket1.png" }, 
          { id: 2, name: "Rockstar", price: "900000", image: "/Imagenes/jacket2.png" }, 
          { id: 3, name: "Roar", price: "1000000", image: "/Imagenes/jacket3.png" },
        ];
        setProducts(mockProducts);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los productos.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // El array vacío significa que se ejecuta una vez al montar el componente

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="tienda">
      <h2>Shop Now</h2>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Shop;