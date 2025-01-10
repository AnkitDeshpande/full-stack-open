import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import basket from '../../basket.png';
import { CartContext } from '../contexts/CartContext';

export const MyNavbar = () => {
    const nav = [
        { id: 1, title: "Electronics", path: "/electronics" },
        { id: 2, title: "Health & Beauty", path: "/health" },
        { id: 3, title: "Home & Kitchen", path: "/kitchen" },
        { id: 4, title: "Clothing & Apparel", path: "/clothings" },
        { id: 5, title: "Sports & Outdoors", path: "/sports" },
        { id: 6, title: "Home", path: "/" }
    ];

    const { value } = useContext(CartContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* Use Link for client-side navigation */}
                <Navbar.Brand as={Link} to={nav[5].path}>
                    React Routing
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Categories" id="category-dropdown">
                            {nav.map((el) => (
                                <NavDropdown.Item as={NavLink} key={el.id} to={el.path}>
                                    {el.title}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/cart">
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <img
                                    src={basket}
                                    alt="Cart"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        border: "1px solid black",
                                        maxHeight: "100%",
                                    }}
                                />
                                {/* Cart count badge */}
                                {value > 0 && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-5px',
                                            right: '-5px',
                                            backgroundColor: 'teal',
                                            color: 'white',
                                            borderRadius: '50%',
                                            width: '20px',
                                            height: '20px',
                                            textAlign: 'center',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            lineHeight: '20px',
                                        }}
                                    >
                                        {value}
                                    </div>
                                )}
                            </div>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
