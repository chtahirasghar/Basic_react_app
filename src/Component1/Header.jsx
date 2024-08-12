import React from 'react';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><b>Active Life</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Dropdown 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
