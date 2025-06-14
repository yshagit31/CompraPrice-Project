import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 28, showText = true, textSize = '1.5rem', color = 'var(--bs-primary)' }) => {
  return (
    <Link to="/" className="d-flex align-items-center text-decoration-none">
      <ShoppingCart size={size} className="me-2" style={{ color }} />
      {showText && (
        <span style={{ fontSize: textSize, fontWeight: 'bold', color }}>
          CompraPrice
        </span>
      )}
    </Link>
  );
};

export default Logo;
