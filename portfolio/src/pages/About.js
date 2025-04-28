import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
`;

const About = () => {
  return (
    <Container>
      <Title>Про мене</Title>
      <Paragraph>Мене звати Георгій, мені 21 рік, я навчаюсь на 2 курсі, і одночасно працюю системним адміністратором на підприємстві. Це дає мені можливість здобувати практичний досвід, що дуже важливо для мого професійного розвитку.</Paragraph>
      <h2>Мої проєкти</h2>
      <ul>
        <li>
          <a href="https://github.com/georgepl220/html-css-landing">HTML + CSS</a>
        </li>
        <li>
          <a href="https://github.com/georgepl220/js-easy">JavaScript</a>
        </li>
        <li>
          <a href="https://github.com/georgepl220/react-first-lab">React</a>
        </li>
      </ul>
    </Container>
  );
};

export default About;
