import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <i className="fas fa-laptop-code"></i>
            <span>I-ON Infotech</span>
          </Link>
          <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <Link to="/" className={isActive("/")} onClick={handleNavClick}>
              Home
            </Link>
            <Link
              to="/about"
              className={isActive("/about")}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              to="/services"
              className={isActive("/services")}
              onClick={handleNavClick}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={isActive("/portfolio")}
              onClick={handleNavClick}
            >
              Portfolio
            </Link>
            <Link
              to="/team"
              className={isActive("/team")}
              onClick={handleNavClick}
            >
              Team
            </Link>
            <Link
              to="/careers"
              className={isActive("/careers")}
              onClick={handleNavClick}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={isActive("/contact")}
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <i
              className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
