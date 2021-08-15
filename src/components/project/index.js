import React from 'react';
import PropTypes from 'prop-types';
import TextStyle from '../text/style';
import ProjectStyle from './style';

const Project = ({ name, description, repository }) => (
  <ProjectStyle>
    <TextStyle typographyVariant="title" as="h2" isDestaque>{name}</TextStyle>
    <TextStyle typographyVariant="paragraph" as="p" marginTop="15px">
      {description}
    </TextStyle>
    <TextStyle typographyVariant="link" as="a" href={repository} isDestaque marginTop="5px" marginLeft="auto">
      Repositório
    </TextStyle>
  </ProjectStyle>
);

export default Project;

Project.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string]).isRequired,
  repository: PropTypes.oneOfType([PropTypes.string]).isRequired,
};
