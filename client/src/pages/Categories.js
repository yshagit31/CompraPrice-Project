import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Watch, 
  Camera, 
  Gamepad2,
  Shirt,
  ShoppingBag,
  Gem,
  Home,
  Sofa,
  Utensils,
  Dumbbell,
  Bike,
  BookOpen,
  Baby,
  Car,
  Wrench
} from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Electronics',
      icon: Smartphone,
      subcategories: [
        { name: 'Smartphones', icon: Smartphone, count: '2,500+' },
        { name: 'Laptops', icon: Laptop, count: '1,200+' },
        { name: 'Headphones', icon: Headphones, count: '800+' },
        { name: 'Smart Watches', icon: Watch, count: '600+' },
        { name: 'Cameras', icon: Camera, count: '400+' },
        { name: 'Gaming', icon: Gamepad2, count: '900+' }
      ]
    },
    {
      name: 'Fashion',
      icon: Shirt,
      subcategories: [
        { name: 'Men\'s Clothing', icon: Shirt, count: '3,000+' },
        { name: 'Women\'s Clothing', icon: ShoppingBag, count: '4,500+' },
        { name: 'Shoes', icon: ShoppingBag, count: '2,200+' },
        { name: 'Accessories', icon: Gem, count: '1,800+' },
        { name: 'Bags', icon: ShoppingBag, count: '1,100+' },
        { name: 'Jewelry', icon: Gem, count: '900+' }
      ]
    },
    {
      name: 'Home & Garden',
      icon: Home,
      subcategories: [
        { name: 'Furniture', icon: Sofa, count: '1,500+' },
        { name: 'Kitchen', icon: Utensils, count: '2,000+' },
        { name: 'Home Decor', icon: Home, count: '1,800+' },
        { name: 'Garden', icon: Home, count: '700+' },
        { name: 'Tools', icon: Wrench, count: '1,200+' },
        { name: 'Appliances', icon: Home, count: '800+' }
      ]
    },
    {
      name: 'Sports & Fitness',
      icon: Dumbbell,
      subcategories: [
        { name: 'Fitness Equipment', icon: Dumbbell, count: '600+' },
        { name: 'Sports Gear', icon: Dumbbell, count: '1,100+' },
        { name: 'Bicycles', icon: Bike, count: '400+' },
        { name: 'Outdoor', icon: Dumbbell, count: '800+' },
        { name: 'Team Sports', icon: Dumbbell, count: '500+' },
        { name: 'Water Sports', icon: Dumbbell, count: '300+' }
      ]
    },
    {
      name: 'Books & Media',
      icon: BookOpen,
      subcategories: [
        { name: 'Books', icon: BookOpen, count: '5,000+' },
        { name: 'E-books', icon: BookOpen, count: '3,200+' },
        { name: 'Movies', icon: BookOpen, count: '1,800+' },
        { name: 'Music', icon: BookOpen, count: '2,500+' },
        { name: 'Games', icon: Gamepad2, count: '1,200+' },
        { name: 'Educational', icon: BookOpen, count: '900+' }
      ]
    },
    {
      name: 'Baby & Kids',
      icon: Baby,
      subcategories: [
        { name: 'Baby Care', icon: Baby, count: '800+' },
        { name: 'Toys', icon: Baby, count: '1,500+' },
        { name: 'Kids Clothing', icon: Shirt, count: '1,200+' },
        { name: 'Baby Gear', icon: Baby, count: '600+' },
        { name: 'Educational Toys', icon: BookOpen, count: '700+' },
        { name: 'Safety', icon: Baby, count: '400+' }
      ]
    }
  ];

  const trendingCategories = [
    { name: 'Gaming Laptops', searches: '15,000+', trend: '+25%' },
    { name: 'Wireless Earbuds', searches: '12,000+', trend: '+18%' },
    { name: 'Smart Home', searches: '8,500+', trend: '+32%' },
    { name: 'Fitness Trackers', searches: '7,200+', trend: '+15%' }
  ];

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
              Shop by Category
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#6c757d',
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover amazing deals across all your favorite product categories
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        {/* Trending Categories */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#2563eb',
              marginBottom: '24px'
            }}>
              🔥 Trending Now
            </h2>
            <div className="row g-3">
              {trendingCategories.map((category, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <Link to={`/?q=${encodeURIComponent(category.name)}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      background: 'white',
                      borderRadius: '1rem',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                      height: '100%',
                      padding: '16px',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.current.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <div>
                          <h6 style={{
                            fontSize: '0.875rem',
                            color: '#212529',
                            marginBottom: '4px'
                          }}>
                            {category.name}
                          </h6>
                          <span style={{
                            fontSize: '0.75rem',
                            color: '#6c757d'
                          }}>
                            {category.searches} searches
                          </span>
                        </div>
                        <span style={{
                          background: '#28a745',
                          color: 'white',
                          fontSize: '0.75rem',
                          padding: '4px 8px',
                          borderRadius: '9999px'
                        }}>
                          {category.trend}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Categories */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="row mb-5">
            <div className="col-12">
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '24px',
                  borderBottom: '2px solid #e5e7eb'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      background: 'rgba(37, 99, 235, 0.1)',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      marginRight: '16px'
                    }}>
                      <category.icon style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#212529',
                        marginBottom: '4px'
                      }}>
                        {category.name}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#6c757d',
                        marginBottom: '0'
                      }}>
                        {category.subcategories.reduce((total, sub) => total + parseInt(sub.count.replace(/[^0-9]/g, '')), 0).toLocaleString()}+ products available
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div className="row g-3">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex} className="col-lg-2 col-md-4 col-sm-6">
                        <Link to={`/?q=${encodeURIComponent(subcategory.name)}`} style={{ textDecoration: 'none' }}>
                          <div style={{
                            background: 'white',
                            borderRadius: '1rem',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                            height: '100%',
                            padding: '16px',
                            textAlign: 'center',
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
                            <div style={{
                              background: '#e5e7eb',
                              borderRadius: '50%',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '40px',
                              height: '40px',
                              marginBottom: '8px'
                            }}>
                              <subcategory.icon style={{ color: '#6c757d', width: '20px', height: '20px' }} />
                            </div>
                            <h6 style={{
                              fontSize: '0.875rem',
                              color: '#212529',
                              marginBottom: '4px'
                            }}>
                              {subcategory.name}
                            </h6>
                            <span style={{
                              fontSize: '0.75rem',
                              color: '#6c757d'
                            }}>
                              {subcategory.count}
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Popular Brands */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#2563eb',
              marginBottom: '24px'
            }}>
              Popular Brands
            </h2>
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              padding: '24px'
            }}>
              <div className="row g-3">
                {['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas', 'Amazon', 'Dell', 'HP', 'Canon', 'LG', 'Xiaomi', 'OnePlus'].map((brand, index) => (
                  <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <Link to={`/?q=${encodeURIComponent(brand)}`} style={{ textDecoration: 'none' }}>
                      <div style={{
                        background: '#e5e7eb',
                        borderRadius: '1rem',
                        height: '100%',
                        padding: '16px',
                        textAlign: 'center',
                        transition: 'transform 0.3s, background 0.3s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.background = '#d1d5db';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = '#e5e7eb';
                      }}>
                        <h6 style={{
                          fontSize: '0.875rem',
                          color: '#212529',
                          marginBottom: '0'
                        }}>
                          {brand}
                        </h6>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Search */}
        <div className="row">
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
                Can't find what you're looking for?
              </h3>
              <p style={{
                fontSize: '1rem',
                marginBottom: '24px'
              }}>
                Use our powerful search to find any product across all categories
              </p>
              <Link
                to="/"
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  borderRadius: '9999px',
                  background: 'white',
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'background 0.3s, color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#2563eb';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#2563eb';
                }}
              >
                Start Searching
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;