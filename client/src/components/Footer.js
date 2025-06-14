import {
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import '../index.css';
import { quickLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-light w-100 mt-auto shadow-lg rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container-fluid px-5 pt-5 pb-4">
        <div className="row gy-5 d-flex justify-content-between">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <div className="gradient-icon p-2 rounded-4" style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)' }}>
                <ShoppingCart className="text-white" size={30} />
              </div>
              <h4 className="mb-0 fw-bold fs-3 ms-2" style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                CompraPrice
              </h4>
            </div>
            <p className="text-secondary fs-5">
              Your ultimate destination for comparing prices and finding the best deals across multiple platforms.
            </p>
            <div className="d-flex gap-3 mt-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-circle gradient-icon d-flex align-items-center justify-content-center"
                  style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', width: '40px', height: '40px', transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Icon className="text-white" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold fs-4 mb-3" style={{ color: '#2563eb' }}>Quick Links</h5>
            <ul className="list-unstyled fs-5">
              {quickLinks.map((item,i) => (
                <li key={i} className="mb-2">
                  <a
                    href={item.href}
                    className="text-secondary text-decoration-none"
                    style={{ transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6c757d'}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold fs-4 mb-3" style={{ color: '#2563eb' }}>Categories</h5>
            <ul className="list-unstyled fs-5">
              {['Electronics', 'Fashion', 'Home & Garden', 'Sports'].map((text, i) => (
                <li key={i} className="mb-2">
                  <a
                    href="#"
                    className="text-secondary text-decoration-none"
                    style={{ transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6c757d'}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold fs-4 mb-3" style={{ color: '#2563eb' }}>Contact Info</h5>
            <div className="d-flex align-items-center mb-3 fs-5">
              <Mail size={20} className="me-2" style={{ color: '#6c757d' }} />
              <span className="text-secondary">support@compraprice.com</span>
            </div>
            <div className="d-flex align-items-center mb-3 fs-5">
              <Phone size={20} className="me-2" style={{ color: '#6c757d' }} />
              <span className="text-secondary">+1 (555) 123-4567</span>
            </div>
            <div className="d-flex align-items-start fs-5">
              <MapPin size={20} className="me-2 mt-1" style={{ color: '#6c757d' }} />
              <span className="text-secondary">
                123 Business Street, Suite 100<br />New York, NY 10001
              </span>
            </div>
          </div>
        </div>

        <hr className="border-light mt-5" />

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-secondary fs-6">
              © 2024 CompraPrice. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-md-end gap-4 fs-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, i) => (
                <a
                  key={i}
                  href={`/${text.toLowerCase().replace(/ /g, '')}`}
                  className="text-secondary text-decoration-none"
                  style={{ transition: 'color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2563eb'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6c757d'}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
