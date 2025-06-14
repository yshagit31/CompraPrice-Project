import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'support@compraprice.com',
      action: 'mailto:support@compraprice.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri 9AM-6PM IST',
      contact: '+91 1800-123-4567',
      action: 'tel:+911800123456'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: '#'
    }
  ];

  const faqItems = [
    {
      question: 'How does CompraPrice work?',
      answer: 'CompraPrice searches multiple online retailers to find the best prices for products you\'re looking for. We compare prices in real-time to ensure you get the best deals.'
    },
    {
      question: 'Is CompraPrice free to use?',
      answer: 'Yes! CompraPrice is completely free for users. We earn commission from retailers when you make purchases through our links, but this doesn\'t affect the prices you pay.'
    },
    {
      question: 'How often are prices updated?',
      answer: 'Our prices are updated in real-time. However, prices can change frequently on retailer websites, so we recommend checking the final price on the retailer\'s website before purchasing.'
    },
    {
      question: 'Can I trust the retailers on CompraPrice?',
      answer: 'Yes, we only partner with verified and trusted retailers. All our partner stores are legitimate businesses with proper customer service and return policies.'
    }
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Get in Touch</h1>
        <p className="text-muted fs-5">Have questions? We're here to help! Reach out to us anytime.</p>
      </div>

      {/* Contact Methods */}
      <div className="row mb-5">
        {contactMethods.map((method, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="mb-3 bg-primary bg-opacity-10 rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: 60, height: 60 }}>
                  <method.icon className="text-primary" size={28} />
                </div>
                <h5>{method.title}</h5>
                <p className="text-muted small">{method.description}</p>
                <a href={method.action} className="btn btn-outline-primary btn-sm rounded-pill">{method.contact}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form and Info */}
      <div className="row g-4 mb-5">
        {/* Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="mb-4">Send us a Message</h4>
              {isSuccess ? (
                <div className="text-center py-5">
                  <CheckCircle size={64} className="text-success mb-3" />
                  <h5 className="text-success">Message Sent Successfully!</h5>
                  <p className="text-muted">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Subject</label>
                      <select className="form-select" name="subject" value={formData.subject} onChange={handleChange} required>
                        <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="bug">Report a Bug</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows="5" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} className="me-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h5>Contact Information</h5>
              <div className="d-flex align-items-start mb-3">
                <MapPin size={20} className="text-primary me-3 mt-1" />
                <div>
                  <strong>Address</strong>
                  <p className="text-muted small mb-0">
                    123 Business Street, Suite 100<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <Phone size={20} className="text-primary me-3 mt-1" />
                <div>
                  <strong>Phone</strong>
                  <p className="text-muted small mb-0">+91 1800-123-4567</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <Mail size={20} className="text-primary me-3 mt-1" />
                <div>
                  <strong>Email</strong>
                  <p className="text-muted small mb-0">support@compraprice.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5><Clock size={20} className="me-2" />Business Hours</h5>
              <div className="small">
                <div className="d-flex justify-content-between mb-2">
                  <span>Mon - Fri</span><span className="text-muted">9:00 AM - 6:00 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Saturday</span><span className="text-muted">10:00 AM - 4:00 PM</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Sunday</span><span className="text-muted">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-5">
        <h4 className="text-center mb-4"><HelpCircle size={24} className="me-2" />Frequently Asked Questions</h4>
        <div className="row">
          {faqItems.map((faq, idx) => (
            <div key={idx} className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h6 className="text-primary">{faq.question}</h6>
                  <p className="text-muted small">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-5 bg-light rounded shadow-sm">
        <h4>Still have questions?</h4>
        <p className="text-muted">Our support team is here to help you 24/7.</p>
        <a href="#" className="btn btn-primary rounded-pill px-4">Start Live Chat</a>
      </div>
    </div>
  );
};

export default Contact;
