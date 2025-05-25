import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addProductToCart } = useCart();

  const handleAddToCart = () => {
    addProductToCart(product);
    alert(`${product.name} ha sido añadido al carrito.`);
  };

  return (
    <div className="product" data-product-name={product.name} data-product-price={product.price}>
      <img src={product.image} alt={`Chaqueta ${product.name}`} />
      <p>{product.name}</p>
      <p>${parseInt(product.price).toLocaleString()}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;