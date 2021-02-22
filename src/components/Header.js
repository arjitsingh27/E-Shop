import React from 'react'
import { Container, Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src="image1.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}E-SHOP</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">


                            <LinkContainer to='/cart'>
                                <Nav.Link><i className="fas fa-shopping-cart"></i>{''}Cart</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/sign'>
                                <Nav.Link><i className="fas fa-user"></i>{' '}Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
