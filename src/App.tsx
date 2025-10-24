import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import { ProductDetail } from "./ProductDetail";

const App: React.FC = () => {
  return (
    <Router>
      {/* ✅ Header always visible */}
      <Header />

      <main className="flex-grow">
        <Routes>
          {/* 🏠 Home page — full content (About, Products, Clients, etc.) */}
          <Route path="/" element={<Home />} />

          {/* 📦 Product detail page — matches /product/:productName */}
          <Route path="/product/:productName" element={<ProductDetail />} />
        </Routes>
      </main>

      {/* ✅ Footer always visible */}
      <Footer />
    </Router>
  );
};

export default App;
