import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img1 from '../../assets/explore.jpg'
import img2 from '../../assets/choosePkg.jpg'
import img3 from '../../assets/payment.jpg'

function HowToUse() {
    return (
        <Container className="my-5">
            <h2>How to Use Our Website</h2>
            <Row className="gy-4"> {/* Added gap between rows */}
                <Col md={4} className="text-center mb-4" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                    <Image src={img1} alt="Explore Services" fluid rounded className="mb-3" />
                    <h4>1. Explore Our Services</h4>
                    <p>
                        Browse through our extensive list of services, including personal
                        training, group classes, and more. Find the perfect fit for your
                        fitness needs.
                    </p>
                </Col>
                <Col md={4} className="text-center mb-4" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                    <Image src={img2} alt="Sign Up or Log In" fluid rounded className="mb-3" />
                    <h4>2. Sign Up or Log In</h4>
                    <p>
                        Create an account or log in to book classes, track your progress,
                        and stay updated with the latest news and offers.
                    </p>
                </Col>
                <Col md={4} className="text-center mb-4" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                    <Image src={img3} alt="Start Fitness Journey" fluid rounded className="mb-3" />
                    <h4>3. Start Your Fitness Journey</h4>
                    <p>
                        Book your first session and begin your journey towards a healthier,
                        fitter you. Our trainers are here to support you every step of the
                        way.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default HowToUse;
