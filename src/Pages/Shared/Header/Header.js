import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const hangleSignOut = () => {
        signOut(auth)
    }
    return (
        <>

            <Navbar collapseOnSelect sticky="top" expand="lg" className='nav' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' >
                        {/* <img src={logo} height='30' alt="" /> */}
                        fit to fly
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} as={Link} to='/home'>Services</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} as={Link} to='/blogs'>Blogs</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} as={Link} to='/about'>About</NavLink>
                            {
                                user ?
                                    <button onClick={hangleSignOut} className='btn btn-link text-decoration-none text-light'>Sign Out</button>
                                    :
                                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} as={Link} to='/login'>
                                        Login
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;