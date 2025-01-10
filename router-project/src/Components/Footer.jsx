import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-4">
            <Container>
                <Row>
                    {/* Social Media Icons */}
                    <Col md={6} className="mb-3 mb-md-0">
                        <h5>Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </Col>

                    {/* Additional Links */}
                    <Col md={6}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/faq" className="text-dark">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="/jobs" className="text-dark">
                                    Job Opportunities
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="text-dark">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-dark">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;