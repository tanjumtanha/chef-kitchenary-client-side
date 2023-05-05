import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark p-4 mt-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5 className='text-white mt-4'>CHEF KITCHENARY</h5>
                        <p className='text-white'>
                            We are a team of food enthusiasts who love to share our favorite
                            recipes with others. Our goal is to inspire people to try new
                            things in the kitchen and discover the joy of cooking.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h5 className='text-white mt-4'>Our Services</h5>
                        <ul className="list-unstyled text-white">
                            <li>
                                <Link to='/services' className='text-decoration-none text-white'>Service</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white' to='/help'>Help</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white' to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white' to='/about'>About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className='text-white mt-4'>Contact Us</h5>
                        <ul className="list-unstyled text-white">
                            <li>123 Main Street</li>
                            <li>Dhaka, Bangladesh</li>
                            <li>Phone: +9999999999</li>
                            <li>Email: info@chefkitchenary.com</li>
                        </ul>
                    </Col>
                </Row>
                <hr className='text-white'/>
                <p className="text-center text-white">
                    &copy;All rights reserved by Chef Kitchenary.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;