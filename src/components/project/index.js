import React from 'react';
import TextStyle from '../text/style';
import ProjectStyle from './style';

const Project = () => (
  <ProjectStyle>
    <TextStyle typographyVariant="title" as="h2" isDestaque>projetorest</TextStyle>
    <TextStyle typographyVariant="paragraph" as="p" marginTop="15px">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bef
      the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley
      type and scrambled it to make a type specimen book. It has survived not only five centuries, b
      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in t
    </TextStyle>
    <TextStyle typographyVariant="link" as="a" href="https://github.com/mateus-cirino?tab=repositories" isDestaque marginTop="5px" marginLeft="auto">
      Repositório
    </TextStyle>
  </ProjectStyle>
);

export default Project;
