import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on first render
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (newItem) => {
    setCart((prev) => {
      // Find if this specific workspace + plan is already in the cart
      const existingIndex = prev.findIndex(
        (i) => i.id === newItem.id && i.plan_type === newItem.plan_type
      );

      let newCart;
      if (existingIndex !== -1) {
        // Update existing item (remembers the new seat selection)
        newCart = [...prev];
        newCart[existingIndex] = newItem;
      } else {
        // Add new item
        newCart = [...prev, newItem];
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = prev.filter((i) => i.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalAmount = cart.reduce((sum, item) => sum + Number(item.final_amount || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
