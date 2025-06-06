import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('https://my-json-server.typicode.com/your-username/your-repo/products');
        const mockProducts = [
          { id: 1, name: "Love Birds", price: "800000", image: `${process.env.PUBLIC_URL}/Imagenes/jacket1.png` },
          { id: 2, name: "Rockstar", price: "900000", image: `${process.env.PUBLIC_URL}/Imagenes/jacket2.png` },
          { id: 3, name: "Roar", price: "1000000", image: `${process.env.PUBLIC_URL}/Imagenes/jacket3.png` },
        ];
        setProducts(mockProducts);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los productos.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

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