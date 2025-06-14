import React, { useState } from 'react';
import './Navbar.css';
import { ShoppingCart } from 'lucide-react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky-top shadow-lg bg-white">
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Logo */}
          <a href='/' className='text-decoration-none'>
          <div className="d-flex align-items-center gap-2">
            <div className="gradient-icon p-2 rounded">
              <ShoppingCart className="icon-white" />
            </div>
            <span className="navbar-brand mb-0 gradient-text-head">
              CompraPrice
            </span>
          </div>
          </a>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex align-items-center gap-4 ms-auto">
            <a href="/" className="nav-link-custom">Home</a>
            <a href="/categories" className="nav-link-custom">Categories</a>
            <a href="/deals" className="nav-link-custom">Deals</a>
            <a href="/about" className="nav-link-custom">About</a>
            <a href="/login" className="nav-link-custom">Log in</a>
            {/* <a href="/" className="nav-link-custom">Help</a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="btn d-md-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="d-md-none px-4 pb-3 border-top">
            <a href="#" className="mobile-nav-link">Categories</a>
            <a href="#" className="mobile-nav-link">Deals</a>
            <a href="#" className="mobile-nav-link">About</a>
            <a href="/register" className="mobile-nav-link">Log in</a>
            <a href="/" className="mobile-nav-link">Help</a>
          </div>
        )}
      </nav>
    </header>
  );
}
