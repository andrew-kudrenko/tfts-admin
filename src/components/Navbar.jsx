import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <NavLink to="/home">
        <Navbar.Brand>TFTS Admin Panel</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/categories/" className="nav-link">
            Категории
          </NavLink>
          <NavLink to="/tasks/" className="nav-link">
            Задачи
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)