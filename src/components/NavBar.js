import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from 'reactstrap';
import "../styles/NavBar.css";

const NavBar = () => {
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);
    return (
        <React.Fragment>
            <Navbar expand="lg">
                <NavbarBrand href="/" className='nav-logo'>
                    <img
                        alt="logo"
                        src="/assets/nav-logo.svg"
                    /></NavbarBrand>
                <NavbarToggler onClick={toggleOffcanvas} />
                <Collapse navbar>
                    <Nav className="ms-auto align-items-center" navbar>
                        <NavItem>
                            <NavLink href="/" className='nav-font'>About Fire Kirin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/fish-game" className='nav-font'>
                                Fish Game
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/slots" className='nav-font'>
                                Slots
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog" className='nav-font'>
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact" className='nav-font'>
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <button className="mx-3 nav-button" type="submit">Create Free account</button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Offcanvas isOpen={offcanvasOpen} toggle={toggleOffcanvas} direction="end">
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    Offcanvas Title
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="/">About Fire Kirin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/fish-game">Fish Game</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/slots">Slots</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
        </React.Fragment>
    )
};

export default NavBar;
