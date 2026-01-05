import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prev) => {
      // Find if this specific workspace + plan is already in the cart
      const existingIndex = prev.findIndex(
        (i) => i.id === newItem.id && i.plan_type === newItem.plan_type
      );

      if (existingIndex !== -1) {
        // Update existing item (remembers the new seat selection)
        const newCart = [...prev];
        newCart[existingIndex] = newItem;
        return newCart;
      }
      // Add new item
      return [...prev, newItem];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setCart([]);

  const totalAmount = cart.reduce((sum, item) => sum + Number(item.final_amount || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
