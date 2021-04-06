import React from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* {<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>} */}
                <Link to="/" className="navbar-brand">Admin Dashboard
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <li className="nav-item">
                            <NavLink to="signin" className="nav-link">SignIn</NavLink>
                        </li>
                        {/* {<Nav.Link href="#deets">SignIn</Nav.Link>} */}
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                        </li>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
