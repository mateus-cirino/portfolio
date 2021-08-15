import React from 'react';
import Head from 'next/head';
import About from '../src/components/about';
import TextStyle from '../src/components/text/style';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,900&family=Montserrat:wght@900&display=swap" rel="stylesheet" />
      </Head>
      <TextStyle typographyVariant="logo" as="h1" marginLeft="15px">
        Mateus Cirino
      </TextStyle>
      <About />
    </div>
  );
}
