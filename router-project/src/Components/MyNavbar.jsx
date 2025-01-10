import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import basket from '../../basket.png';

export const MyNavbar = () => {
    const nav = [
        { id: 1, title: "Electronics", path: "/electronics" },
        { id: 2, title: "Health & Beauty", path: "/health" },
        { id: 3, title: "Home & Kitchen", path: "/kitchen" },
        { id: 4, title: "Clothing & Apparel", path: "/clothings" },
        { id: 5, title: "Sports & Outdoors", path: "/sports" },
        { id: 6, title: "Home", path: "/" }
    ];

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
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
