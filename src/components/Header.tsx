import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 Smoothly scroll to a section on the Home page
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 👇 Handle navigation for header links
  const handleNavClick = (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      // Wait for Home page to render, then scroll
      setTimeout(() => scrollToSection(id), 300);
    }
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white sticky top-0 z-50 shadow-2xl border-b-2 border-yellow-600">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side — Logo + Text */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo/AA-Steel-Trading.png"
              alt="A.A. Steels & Trading Co."
              className="h-16 w-16 object-contain"
              style={{ transform: "scale(1.75)" }}
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-yellow-500">
                A.A. STEELS & TRADING CO.
              </h1>
              <p className="text-sm text-gray-300">Since 2003</p>
            </div>
          </div>

          {/* Right side — Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => handleNavClick("home")}
              className="hover:text-yellow-500 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-yellow-500 transition"
            >
              About us
            </button>
            <button
              onClick={() => handleNavClick("products")}
              className="hover:text-yellow-500 transition"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick("clients")}
              className="hover:text-yellow-500 transition"
            >
              Clients
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="hover:text-yellow-500 transition"
            >
              Contact us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
