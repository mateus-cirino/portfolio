import React from 'react';
import TextStyle from '../text/style';
import AboutStyle from './style';
import ProfileImage from '../profileImage';

const About = () => (
  <AboutStyle>
    <ProfileImage />
    <TextStyle typographyVariant="paragraph" as="p" width="80%">
      Olá, seja bem vindo(a) ao meu portfólio. Abaixo você verá alguns projetos que desenvolvi,
      caso queira ver outros, basta acessar o meu
      {' '}
      <TextStyle typographyVariant="link" as="a" href="https://github.com/mateus-cirino?tab=repositories" isDestaque marginTop="15px">GitHub</TextStyle>
      . Para conhecer minhas experiências
      acadêmicas, profissionais ou entrar em contato comigo, basta acessar o meu
      {' '}
      <TextStyle typographyVariant="link" as="a" href="https://www.linkedin.com/in/mateus-cirino-597637208/" isDestaque marginTop="15px">Linkedin</TextStyle>
      .
    </TextStyle>
  </AboutStyle>
);

export default About;
