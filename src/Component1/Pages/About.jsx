import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutimg from '../../assets/about.jpg'
function About() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <h2>About Our Gym</h2>
                    <p className='mx-auto'>
                        Welcome to our state-of-the-art gym where fitness meets passion. We
                        offer a wide range of equipment, personal training, and fitness
                        classes to help you reach your goals. Whether you're a beginner or a
                        seasoned athlete, we have something for everyone.Welcome to our state-of-the-art gym where fitness meets passion. We
                        offer a wide range of equipment, personal training, and fitness
                        classes to help you reach your goals. Whether you're a beginner or a
                        seasoned athlete, we have something for everyone.Welcome to our state-of-the-art gym where fitness meets passion. We
                        offer a wide range of equipment, personal training, and fitness
                        classes to help you reach your goals. Whether you're a beginner or a
                        seasoned athlete, we have something for everyone.
                    </p>
                </Col>
                <Col md={6}>
                    <Image
                        src={aboutimg}
                        alt="Gym"
                        fluid
                        rounded
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default About;
