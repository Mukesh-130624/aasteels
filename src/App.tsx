import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 Lazy-load big pages
const Home = React.lazy(() => import("./Home"));
const ProductDetail = React.lazy(() => import("./ProductDetail"));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* ✅ Header always visible */}
      <Header />

      {/* 🧭 Suspense will show fallback while a lazy component loads */}
      <Suspense
        fallback={
          <div className="text-center py-10 text-yellow-500">Loading...</div>
        }
      >
        <main className="flex-grow">
          <Routes>
            {/* 🏠 Home page — lazy loaded */}
            <Route path="/" element={<Home />} />

            {/* 📦 Product detail page — lazy loaded */}
            <Route path="/product/:productName" element={<ProductDetail />} />
          </Routes>
        </main>
      </Suspense>

      {/* ✅ Footer always visible */}
      <Footer />
    </Router>
  );
};

export default App;
