import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// 🛒 Cart context
import { CartProvider } from "./context/CartContext.jsx";

// 🔐 User Auth context
import { AuthProvider } from "./context/AuthContext.jsx";

// 👨‍💼 Admin Auth context

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
