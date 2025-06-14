import React from 'react';
import { Card, Row, Col, Placeholder, Container } from 'react-bootstrap';

const LoadingCard = () => {
  return (
    <Card className="mb-4 shadow-sm border border-light">
      <Card.Body>
        <Row className="g-4">
          {/* Image Skeleton */}
          <Col lg={4}>
            <div className="bg-secondary bg-opacity-10 rounded w-100" style={{ height: '230px' }}></div>
          </Col>

          {/* Content Skeleton */}
          <Col lg={8}>
            {/* Title and Description Skeleton */}
            <Placeholder as="div" animation="glow" className="mb-3">
              <Placeholder xs={2} bg="secondary" /> <br />
              <Placeholder xs={8} /> <br />
              <Placeholder xs={5} />
            </Placeholder>

            {/* Price Card Skeletons */}
            <Row className="g-3 mb-4">
              {[1, 2].map((_, idx) => (
                <Col md={6} key={idx}>
                  <Card className="p-3 bg-light border-0">
                    <Placeholder as="div" animation="glow">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-secondary bg-opacity-25 rounded me-2" style={{ width: '32px', height: '32px' }}></div>
                        <Placeholder xs={4} />
                      </div>
                      <Placeholder xs={6} className="mb-2" />
                      <Placeholder xs={8} className="mb-1" />
                      <Placeholder xs={6} className="mb-1" />
                      <Placeholder xs={7} className="mb-1" />
                      <Placeholder xs={12} style={{ height: '40px' }} className="rounded mt-3" />
                    </Placeholder>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Savings Card Skeleton */}
            <Card className="p-3 bg-light border-0">
              <Row>
                <Col>
                  <Placeholder as="div" animation="glow">
                    <Placeholder xs={6} className="mb-2" />
                    <Placeholder xs={4} style={{ height: '32px' }} />
                  </Placeholder>
                </Col>
                <Col className="text-end">
                  <Placeholder as="div" animation="glow">
                    <Placeholder xs={5} className="mb-2" />
                    <Placeholder xs={4} />
                  </Placeholder>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LoadingCard;
