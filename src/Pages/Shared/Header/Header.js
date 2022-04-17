import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' >
                        {/* <img src={logo} height='30' alt="" /> */}
                        fit to fly
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            {/* {
                  user ?
                    <button onClick={hangleSignOut} className='btn btn-link text-decoration-none text-light'>Sign Out</button>
                    :
                    <Nav.Link as={Link} to='/login'>
                      Login
                    </Nav.Link>
                } */}
                            <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;