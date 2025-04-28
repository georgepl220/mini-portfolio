import React from 'react';
import styled from 'styled-components';

// Стилізація Footer
const FooterContainer = styled.footer`
  background-color: #34495e;
  color: #ecf0f1;
  padding: 30px;
  text-align: center;
  font-size: 1em;
  margin-top: 50px;
  border-top: 2px solid #2980b9;
`;

const FooterLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1em;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Зв'язок зі мною:</p>
      <div>
        <FooterLink href="https://github.com/your-username" target="_blank">
          GitHub
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/your-profile" target="_blank">
          LinkedIn
        </FooterLink>
        <FooterLink href="https://twitter.com/your-profile" target="_blank">
          Twitter
        </FooterLink>
      </div>
      <p>&copy; 2025 Моє Портфоліо</p>
    </FooterContainer>
  );
};

export default Footer;
