import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
    <Container>
      <LinkContainer to='/'>
        <Navbar.Brand>E-Shope</Navbar.Brand>
      </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to='/cart'>
                <Nav.Link> <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i> sign in</Nav.Link>
              </LinkContainer>

                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Header
