import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  padding: 15px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #ecf0f1;
  font-size: 1.8em;
  margin: 0;
  font-family: 'Arial', sans-serif;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const NavItem = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Моє Портфоліо</Logo>
      <Nav>
        <NavItem to="/about">Про мене</NavItem>
        <NavItem to="/my-city">Моє місто</NavItem>
        <NavItem to="/my-future">Мій розвиток</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

