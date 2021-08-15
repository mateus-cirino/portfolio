import React from 'react';
import Head from 'next/head';
import About from '../src/components/about';
import TextStyle from '../src/components/text/style';
import Project from '../src/components/project';
import ContainerStyle from '../src/components/grid/style';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,900&family=Montserrat:wght@900&display=swap" rel="stylesheet" />
      </Head>
      <ContainerStyle>
        <TextStyle typographyVariant="logo" as="h1" marginTop="15px">
          Mateus Cirino
        </TextStyle>
        <About />
        <Project />
        <Project />
        <Project />
      </ContainerStyle>
    </div>
  );
}
