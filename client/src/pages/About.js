import React from 'react';
import { ShoppingCart, Users, Award, Globe, Target, Heart, Zap, Shield } from 'lucide-react';
import { Mission,Values,WhyCompra } from '../constants';

const About = () => {
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
              About CompraPrice
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#6c757d',
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We're on a mission to help millions of shoppers find the best deals and save money on their favorite products.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mb-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              padding: '32px',
              height: '100%'
            }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#2563eb',
                marginBottom: '16px'
              }}>
                Our Story
              </h2>
              <p style={{ fontSize: '1rem', color: '#6c757d', marginBottom: '16px' }}>
                Founded in 2024, CompraPrice started with a simple idea: shopping shouldn't be complicated or expensive.
                We noticed that consumers were spending hours comparing prices across different websites, often missing out on the best deals.
              </p>
              <p style={{ fontSize: '1rem', color: '#6c757d', marginBottom: '16px' }}>
                {/* It is a self-developed project built out of my passion for simplifying online shopping. It empowers users to make
                 smarter buying decisions by comparing prices across platforms like Amazon and Flipkart. */}
                 A self-developed project born out of my passion for simplifying online shopping, it empowers users to make smarter buying 
                 decisions by comparing prices across platforms like Amazon and Flipkart.
              </p>
              <p style={{ fontSize: '1rem', color: '#6c757d' }}>
                We believe that everyone deserves access to the best prices, and we're committed to making that a reality
                through innovative technology and partnerships with trusted retailers.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team working"
                style={{
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row g-4 mb-5">
          {Mission.map((item, i) => (
            <div key={i} className="col-md-6">
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                padding: '24px',
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  background: 'rgba(37, 99, 235, 0.1)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  marginBottom: '16px'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#212529' }}>{item.title}</h4>
                <p style={{ fontSize: '1rem', color: '#6c757d' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Values
            </h2>
            <p style={{ fontSize: '1rem', color: '#6c757d' }}>The principles that guide everything we do</p>
          </div>
          {Values.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-4">
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                padding: '24px',
                textAlign: 'center',
                height: '100%',
                transition: 'transform 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  background: 'rgba(37, 99, 235, 0.1)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  marginBottom: '12px'
                }}>
                  {item.icon}
                </div>
                <h5 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#212529' }}>{item.title}</h5>
                <p style={{ fontSize: '0.9rem', color: '#6c757d' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>


  


       {/* Awards & Recognition */}
     {/* Why Choose CompraPrice */}
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
          <Award size={48} style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '24px' }}>
            Why Choose CompraPrice
          </h3>
          <div className="row">
            {WhyCompra.map((feature, i) => (
              <div key={i} className="col-md-4 mb-3">
                <h5 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{feature.title}</h5>
                <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


      {/* Creator Section */}
      {/* <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #2563eb, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Meet the Creator
          </h2>
          <p style={{ fontSize: '1rem', color: '#6c757d' }}>
            The mind behind CompraPrice
          </p>
        </div>

        

        <div className="col-lg-4 col-md-6 mx-auto">
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            padding: '24px',
            textAlign: 'center',
            transition: 'transform 0.3s',
            cursor: 'default'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>

            <img
              // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
              src="/creator.jpg"
              alt="Shashank Yadav"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '12px'
              }}
            />
            <h5 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#212529' }}>Shashank Yadav</h5>
            <p style={{ fontSize: '0.9rem', color: '#2563eb', marginBottom: '8px' }}>Developer & Creator</p>
            <p style={{ fontSize: '0.85rem', color: '#6c757d' }}>
              A passionate developer dedicated to building tools that help users make smarter online shopping decisions.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #2563eb, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Meet the Creators
          </h2>
          <p style={{ fontSize: '1rem', color: '#6c757d' }}>
            The minds behind CompraPrice
          </p>
        </div>

        {[
          {
            name: 'Shashank Yadav',
            role: 'Developer & Creator',
            img: '/creator.jpg', // Replace this with your own image in public folder
            // img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300', // Replace this with your own image in public folder
            desc: 'A passionate developer dedicated to building tools that help users make smarter online shopping decisions.'
          },
          {
            name: 'Sandeep Kumar Mahto',
            role: 'Co-Creator & Engineer',
            img: '/sandy2.jpg',
            // img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
            desc: 'A tech enthusiast focused on creating efficient, user-friendly systems to simplify e-commerce experiences.'
          }
        ].map((person, index) => (
          <div key={index} className="col-lg-4 col-md-6 mx-auto mb-4">
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              padding: '24px',
              textAlign: 'center',
              transition: 'transform 0.3s',
              cursor: 'default'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img
                src={person.img}
                alt={person.name}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginBottom: '12px'
                }}
              />
              <h5 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#212529' }}>{person.name}</h5>
              <p style={{ fontSize: '0.9rem', color: '#2563eb', marginBottom: '8px' }}>{person.role}</p>
              <p style={{ fontSize: '0.85rem', color: '#6c757d' }}>{person.desc}</p>
            </div>
          </div>
        ))}
      </div> */}


      </div>
    </div>
  );
};

export default About;