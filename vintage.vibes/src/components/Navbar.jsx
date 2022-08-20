import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import { GiConcentricCrescents } from "react-icons/gi";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <GiConcentricCrescents className="red" />
          <NavLink to="/" className="logo-container">
            {<Navbar.Brand to="/"> VINTAGE VIBES</Navbar.Brand>}
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link-activo" : "link")}
            >
              Home
            </NavLink>
            <NavLink
              to="/categories/cuadro"
              className={({ isActive }) => (isActive ? "link-activo" : "link")}
            >
              Cuadros Simples
            </NavLink>
            <NavLink
              to="/categories/retro"
              className={({ isActive }) => (isActive ? "link-activo" : "link")}
            >
              Cuadros Retro
            </NavLink>
            <NavLink to="/" className="link">
              Contact
            </NavLink>
          </Nav>
        </Container>

        <CartWidget />
      </Navbar>
    </>
  );
};

export default NavBarMenu;
