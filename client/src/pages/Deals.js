import React, { useState } from 'react';
import { Clock, Flame, Star, ExternalLink, Filter, Calendar, Percent } from 'lucide-react';

const Deals = () => {
  const [activeTab, setActiveTab] = useState('hot');

  const hotDeals = [
    {
      title: 'iPhone 15 Pro Max 256GB',
      originalPrice: '₹1,59,900',
      salePrice: '₹1,39,900',
      discount: '13%',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Amazon',
      rating: 4.8,
      timeLeft: '2h 15m',
      category: 'Electronics'
    },
    {
      title: 'Nike Air Max 270 Running Shoes',
      originalPrice: '₹12,995',
      salePrice: '₹8,995',
      discount: '31%',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Flipkart',
      rating: 4.6,
      timeLeft: '5h 30m',
      category: 'Fashion'
    },
    {
      title: 'Sony WH-1000XM5 Headphones',
      originalPrice: '₹29,990',
      salePrice: '₹24,990',
      discount: '17%',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Croma',
      rating: 4.9,
      timeLeft: '1h 45m',
      category: 'Electronics'
    },
    {
      title: 'MacBook Air M2 13-inch',
      originalPrice: '₹1,14,900',
      salePrice: '₹99,900',
      discount: '13%',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Apple Store',
      rating: 4.7,
      timeLeft: '3h 20m',
      category: 'Electronics'
    },
    {
      title: 'Samsung 55" 4K Smart TV',
      originalPrice: '₹65,000',
      salePrice: '₹45,000',
      discount: '31%',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Samsung',
      rating: 4.5,
      timeLeft: '6h 10m',
      category: 'Electronics'
    },
    {
      title: 'Adidas Ultraboost 22',
      originalPrice: '₹16,999',
      salePrice: '₹11,999',
      discount: '29%',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Myntra',
      rating: 4.4,
      timeLeft: '4h 55m',
      category: 'Fashion'
    }
  ];

  const flashDeals = [
    {
      title: 'Instant Pot Duo 7-in-1',
      originalPrice: '₹12,995',
      salePrice: '₹7,995',
      discount: '38%',
      image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Amazon',
      timeLeft: '45m',
      category: 'Home'
    },
    {
      title: 'Fitbit Versa 4',
      originalPrice: '₹22,999',
      salePrice: '₹16,999',
      discount: '26%',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Flipkart',
      timeLeft: '1h 20m',
      category: 'Electronics'
    },
    {
      title: 'Dyson V15 Detect Vacuum',
      originalPrice: '₹65,900',
      salePrice: '₹52,900',
      discount: '20%',
      image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Dyson',
      timeLeft: '2h 5m',
      category: 'Home'
    }
  ];

  const weeklyDeals = [
    {
      title: 'Dell XPS 13 Laptop',
      originalPrice: '₹1,25,000',
      salePrice: '₹1,05,000',
      discount: '16%',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300',
      store: 'Dell',
      validUntil: 'Dec 31, 2024',
      category: 'Electronics'
    },
    {
      title: 'Canon EOS R6 Mark II',
      originalPrice: '₹2,25,000',
      salePrice: '₹1,95,000',
      discount: '13%',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300',
      store: 'Canon',
      validUntil: 'Jan 5, 2025',
      category: 'Electronics'
    }
  ];

  const renderDeals = (deals, isFlash = false, isWeekly = false) => (
    <div className="row g-4">
      {deals.map((deal, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            height: '100%',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
          }}>
            <div style={{ position: 'relative' }}>
              <img
                src={deal.image}
                alt={deal.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px'
              }}>
                <span style={{
                  background: '#dc3545',
                  color: 'white',
                  fontSize: '0.75rem',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}>
                  <Percent size={12} style={{ marginRight: '4px' }} />
                  {deal.discount} OFF
                </span>
              </div>
              {isFlash && (
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px'
                }}>
                  <span style={{
                    background: '#ffc107',
                    color: '#212529',
                    fontSize: '0.75rem',
                    padding: '4px 8px',
                    borderRadius: '9999px',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}>
                    <Flame size={12} style={{ marginRight: '4px' }} />
                    Flash Deal
                  </span>
                </div>
              )}
            </div>
            <div style={{
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1
            }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  background: '#e5e7eb',
                  color: '#212529',
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  marginRight: '4px'
                }}>
                  {deal.category}
                </span>
                <span style={{
                  background: '#e5e7eb',
                  color: '#212529',
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '9999px'
                }}>
                  {deal.store}
                </span>
              </div>
              <h6 style={{
                fontSize: '0.875rem',
                lineHeight: '1.4',
                color: '#212529',
                marginBottom: '8px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>
                {deal.title}
              </h6>
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#2563eb',
                    marginRight: '8px'
                  }}>
                    {deal.salePrice}
                  </span>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#6c757d',
                    textDecoration: 'line-through'
                  }}>
                    {deal.originalPrice}
                  </span>
                </div>
              </div>
              {deal.rating && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <Star size={14} style={{ color: '#ffc107', fill: '#ffc107', marginRight: '4px' }} />
                  <span style={{ fontSize: '0.75rem', color: '#6c757d' }}>{deal.rating}</span>
                </div>
              )}
              <div style={{ marginTop: 'auto' }}>
                {deal.timeLeft && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    color: '#dc3545'
                  }}>
                    <Clock size={14} style={{ marginRight: '4px' }} />
                    <span style={{ fontSize: '0.75rem' }}>Ends in {deal.timeLeft}</span>
                  </div>
                )}
                {deal.validUntil && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    color: '#17a2b8'
                  }}>
                    <Calendar size={14} style={{ marginRight: '4px' }} />
                    <span style={{ fontSize: '0.75rem' }}>Valid until {deal.validUntil}</span>
                  </div>
                )}
                <button style={{
                  width: '100%',
                  padding: '8px',
                  fontSize: '0.875rem',
                  border: '2px solid #2563eb',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  color: '#2563eb',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s, color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #2563eb, #9333ea)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#2563eb';
                }}>
                  <ExternalLink size={14} style={{ marginRight: '4px' }} />
                  View Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      {/* Hero Section */}
      <div className="row justify-content-center py-5">
        <div className="col-lg-8 text-center">
          <div style={{ animation: 'fadeIn 1s ease-in' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px'
            }}>
              🔥 Hot Deals & Offers
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#6c757d',
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Don't miss out on these amazing limited-time offers and flash sales
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        {/* Deal Stats */}
        <div className="row mb-5">
          {[
            { value: '150+', label: 'Active Deals', color: '#2563eb' },
            { value: '₹2.5Cr', label: 'Money Saved Today', color: '#28a745' },
            { value: '65%', label: 'Max Discount', color: '#ffc107' },
            { value: '24h', label: 'Deal Updates', color: '#17a2b8' }
          ].map((stat, i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-3">
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                textAlign: 'center',
                padding: '16px',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ fontSize: '1.5rem', color: stat.color, marginBottom: '4px' }}>{stat.value}</h3>
                <span style={{ fontSize: '0.75rem', color: '#6c757d' }}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Deal Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-pills justify-content-center">
              {[
                { tab: 'hot', label: 'Hot Deals', icon: <Flame size={16} style={{ marginRight: '4px' }} /> },
                { tab: 'flash', label: 'Flash Sales', icon: <Clock size={16} style={{ marginRight: '4px' }} /> },
                { tab: 'weekly', label: 'Weekly Deals', icon: <Calendar size={16} style={{ marginRight: '4px' }} /> }
              ].map((item, i) => (
                <li key={i} className="nav-item">
                  <button
                    style={{
                      background: activeTab === item.tab ? 'linear-gradient(to right, #2563eb, #9333ea)' : '#e5e7eb',
                      color: activeTab === item.tab ? 'white' : '#212529',
                      borderRadius: '9999px',
                      padding: '8px 16px',
                      margin: '0 4px',
                      border: 'none',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.3s, color 0.3s'
                    }}
                    onClick={() => setActiveTab(item.tab)}
                    onMouseEnter={(e) => {
                      if (activeTab !== item.tab) {
                        e.target.style.background = '#d1d5db';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== item.tab) {
                        e.target.style.background = '#e5e7eb';
                      }
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-lg-6 col-md-8 mx-auto">
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              padding: '16px'
            }}>
              <div className="row g-2">
                <div className="col-md-6">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{
                      background: 'transparent',
                      border: '2px solid #e5e7eb',
                      borderRight: 'none',
                      padding: '8px',
                      borderTopLeftRadius: '0.5rem',
                      borderBottomLeftRadius: '0.5rem'
                    }}>
                      <Filter size={14} style={{ color: '#6c757d' }} />
                    </span>
                    <select style={{
                      width: '100%',
                      padding: '8px',
                      fontSize: '0.875rem',
                      border: '2px solid #e5e7eb',
                      borderTopRightRadius: '0.5rem',
                      borderBottomRightRadius: '0.5rem',
                      outline: 'none',
                      background: 'white',
                      color: '#212529'
                    }}>
                      <option>All Categories</option>
                      <option>Electronics</option>
                      <option>Fashion</option>
                      <option>Home</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <select style={{
                    width: '100%',
                    padding: '8px',
                    fontSize: '0.875rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    outline: 'none',
                    background: 'white',
                    color: '#212529'
                  }}>
                    <option>All Discounts</option>
                    <option>10-20% Off</option>
                    <option>20-30% Off</option>
                    <option>30%+ Off</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deal Content */}
        <div className="tab-content">
          {activeTab === 'hot' && (
            <div className="tab-pane fade show active">
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#2563eb',
                marginBottom: '24px'
              }}>
                🔥 Hottest Deals Right Now
              </h3>
              {renderDeals(hotDeals)}
            </div>
          )}
          {activeTab === 'flash' && (
            <div className="tab-pane fade show active">
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#2563eb',
                marginBottom: '24px'
              }}>
                ⚡ Flash Sales - Limited Time!
              </h3>
              {renderDeals(flashDeals, true)}
            </div>
          )}
          {activeTab === 'weekly' && (
            <div className="tab-pane fade show active">
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#2563eb',
                marginBottom: '24px'
              }}>
                📅 This Week's Best Deals
              </h3>
              {renderDeals(weeklyDeals, false, true)}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="row mt-5">
          <div className="col-12">
            <div style={{
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              borderRadius: '1rem',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              padding: '40px',
              textAlign: 'center',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                Never Miss a Deal!
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
                Get notified about the hottest deals and exclusive offers
              </p>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div style={{ display: 'flex' }}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        width: '100%',
                        padding: '12px',
                        fontSize: '1rem',
                        border: '2px solid #e5e7eb',
                        borderTopLeftRadius: '0.5rem',
                        borderBottomLeftRadius: '0.5rem',
                        outline: 'none',
                        background: 'white',
                        color: '#212529',
                        borderRight: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#2563eb';
                        e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    <button
                      type="button"
                      style={{
                        padding: '12px 16px',
                        fontSize: '1rem',
                        border: 'none',
                        borderTopRightRadius: '0.5rem',
                        borderBottomRightRadius: '0.5rem',
                        background: '#ffffff',
                        color: '#2563eb',
                        cursor: 'pointer',
                        transition: 'background 0.3s, color 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#2563eb';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#ffffff';
                        e.target.style.color = '#2563eb';
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;