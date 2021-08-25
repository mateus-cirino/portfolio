import React from 'react';
import Head from 'next/head';
import About from '../src/components/about';
import TextStyle from '../src/components/text/style';
import Project from '../src/components/project';
import ContainerStyle from '../src/components/grid/style';
import ToggleMode from '../src/components/toggleMode';
import projects from '../public/projects';

export default function Home() {
  const getProject = (name, description, repository) => (
    <Project name={name} description={description} repository={repository} />
  );

  return (
    <div>
      <Head>
        <title>Mateus Cirino</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,900&family=Montserrat:wght@900&display=swap" rel="stylesheet" />
        <meta name="description" content="Portfólio de Mateus Cirino" />
      </Head>
      <ContainerStyle>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
        >
          <TextStyle typographyVariant="logo" as="h1">
            Mateus Cirino
          </TextStyle>
          <ToggleMode />
        </div>
        <About />
        {
        projects
          .map(({ name, description, repository }) => getProject(name, description, repository))
        }
      </ContainerStyle>
    </div>
  );
}
