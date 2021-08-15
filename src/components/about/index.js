import React from 'react';
import ProfileImageStyle from '../profileImage/style';
import TextStyle from '../text/style';
import AboutStyle from './style';

const About = () => (
  <AboutStyle>
    <ProfileImageStyle />
    <TextStyle typographyVariant="paragraph" as="p" width="80%">
      Olá, seja bem vindo(a) ao meu portfólio, abaixo você verá alguns projetos que desenvolvi,
      caso queira ver outros, basta acessar o meu
      {' '}
      <TextStyle typographyVariant="link" as="a" href="https://github.com/mateus-cirino" isDestaque marginTop="15px">GitHub</TextStyle>
      . Caso queira ver minhas experiências
      acadêmicas, profissionais ou entrar em contato, basta acessar o meu
      {' '}
      <TextStyle typographyVariant="link" as="a" href="https://www.linkedin.com/in/mateus-cirino-597637208/" isDestaque marginTop="15px">Linkedin</TextStyle>
      .
    </TextStyle>
  </AboutStyle>
);

export default About;
