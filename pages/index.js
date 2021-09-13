import React, { useState } from 'react';
import Head from 'next/head';
import About from '../src/components/about';
import TextStyle from '../src/components/text/style';
import Project from '../src/components/project';
import ContainerStyle from '../src/components/grid/style';
import ToggleMode from '../src/components/toggleMode';
import projects from '../public/projects';
import ToggleContact from '../src/components/toggleContact';
import Modal from '../src/components/modal';
import BoxStyle from '../src/components/box/style';
import Form from '../src/components/form';

export default function Home() {
  const getProject = (name, description, repository) => (
    <Project name={name} description={description} repository={repository} />
  );

  const [showModalContact, setShowModalContact] = useState(false);
  const onClickToggleContact = () => setShowModalContact(!showModalContact);
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
        <BoxStyle display="flex" justifyContent="space-between" marginTop="10px">
          <TextStyle typographyVariant="logo" as="h1">
            Mateus Cirino
          </TextStyle>
          <BoxStyle marginTop="10px" display="flex">
            <ToggleContact marginRight="25px" onClick={onClickToggleContact} />
            <ToggleMode />
          </BoxStyle>
        </BoxStyle>
        <Modal isOpen={showModalContact} setIsOpen={setShowModalContact}>
          {(propsDoModal) => (
            <BoxStyle
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...propsDoModal}
              opacity="0.9"
              marginLeft="auto"
              padding="25px"
              width={{
                xs: {
                  height: '100%',
                  width: '100%',
                },
                md: {
                  height: '100%',
                  width: '35%',
                },
              }}
              display="block"
            >
              { propsDoModal.CloseButton }
              <BoxStyle
                display="flex"
                justifyContent="center"
                alignItems="end"
                flexWrap="wrap"
              >
                <TextStyle typographyVariant="title" as="h2" isDestaque textAlign="center">
                  Entre em contato
                </TextStyle>
                <TextStyle typographyVariant="paragraph" as="p" textAlign="center" marginTop="10px" marginBottom="10px">
                  Sinta-se a vontade para me enviar uma mensagem!
                  (Obs.: Por hora esse formulário ainda não está funcionando, mas em breve estará!)
                </TextStyle>
                <Form />
              </BoxStyle>
            </BoxStyle>
          )}
        </Modal>
        <About />
        {
        projects
          .map(({ name, description, repository }) => getProject(name, description, repository))
        }
      </ContainerStyle>
    </div>
  );
}
