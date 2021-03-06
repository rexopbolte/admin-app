import React from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { signout } from '../../../actions';

function Header() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout());

    }

    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>SignOut</span>
                </li>

            </Nav>);
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="signin" className="nav-link">SignIn</NavLink>
                </li>
                {/* {<Nav.Link href="#deets">SignIn</Nav.Link>} */}
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                </li>

            </Nav>
        )
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Container fluid>
                {/* {<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>} */}
                <Link to="/" className="navbar-brand">Admin Dashboard
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
