import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>About Us</h5>
                        <p>
                            We are a leading gym with a focus on providing the best services to help you achieve your fitness goals.
                            Join us today and take the first step towards a healthier lifestyle.
                        </p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Home</a></li>
                            <li><a href="#" className="text-light">About</a></li>
                            <li><a href="#" className="text-light">Services</a></li>
                            <li><a href="#" className="text-light">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Contact Us</h5>
                        <p>
                            123 Fitness Street<br />
                            Gym City, GK 12345<br />
                            Phone: (123) 456-7890<br />
                            Email: info@gym.com
                        </p>
                        <div>
                            <a href="#" className="text-light me-3"><FaFacebookF /></a>
                            <a href="#" className="text-light me-3"><FaTwitter /></a>
                            <a href="#" className="text-light me-3"><FaInstagram /></a>
                            <a href="#" className="text-light"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>
                <hr className="border-light" />
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} Gym Name. All Rights Reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
