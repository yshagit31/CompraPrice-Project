import React from 'react';
import { Accordion } from 'react-bootstrap';

// FAQ data object
const faqData = [
  {
    question: 'What is CompraPrice?',
    answer: 'CompraPrice is a price comparison tool that helps you find the best deals on products from platforms like Amazon and Flipkart.'
  },
  {
    question: 'How does CompraPrice work?',
    answer: 'It fetches prices from supported platforms using third-party APIs and compares them to show you the lowest price available.'
  },
  {
    question: 'Is CompraPrice free to use?',
    answer: 'Yes, CompraPrice is completely free to use with no hidden charges.'
  },
  {
    question: 'Which platforms are supported?',
    answer: 'Currently, CompraPrice supports Amazon and Flipkart. More platforms may be added in future updates.'
  },
  {
    question: 'Do you store any personal data?',
    answer: 'No, CompraPrice does not store or track any personal user data.'
  }
];

const Faq = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #2563eb, #9333ea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Frequently Asked Questions
        </h2>
        <p className="text-secondary">Everything you need to know about CompraPrice</p>
      </div>

      <Accordion defaultActiveKey="0">
        {faqData.map((item, i) => (
          <Accordion.Item eventKey={i.toString()} key={i} className="mb-3 shadow-sm border-0">
            <Accordion.Header>
              <strong>{item.question}</strong>
            </Accordion.Header>
            <Accordion.Body>
              {item.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
