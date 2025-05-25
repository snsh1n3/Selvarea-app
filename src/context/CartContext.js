import React, { createContext, useReducer, useContext } from 'react';

// 1. Crear el Contexto
const CartContext = createContext();

// 2. Definir el Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        // Si el item ya existe, podrías aumentar la cantidad o simplemente no añadirlo de nuevo
        return state; // Por ahora, no añadimos duplicados.
      }
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

// 3. Crear el Provider
export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []); // Estado inicial: carrito vacío

  const addProductToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cartItems, addProductToCart, removeProductFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 4. Hook personalizado para consumir el Contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};