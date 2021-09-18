import React, { useEffect, useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import ButtonStyle from '../button/style';
import InputStyle from '../input/style';
import FormStyle from './style';
import sucessAnimation from '../../../public/animations/sucess.json';
import errorAnimation from '../../../public/animations/error.json';
import BoxStyle from '../box/style';

const FORM_STATES = {
  SUCESS: 'SUCESS',
  ERROR: 'ERROR',
  DEFAULT: 'DEFAULT',
};

const Form = () => {
  const [formState, setFormState] = useState(FORM_STATES.DEFAULT);

  useEffect(() => {
    setTimeout(() => {
      setFormState(FORM_STATES.DEFAULT);
    }, 5000);
  }, [formState]);

  const [contato, setContato] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target }) => {
    setContato({
      ...contato,
      [target.id]: target.value,
    });
  };

  const formIsValid = contato.name.length > 0
  && contato.email.length > 0
  && contato.message.length > 0;

  const onSubmit = (event) => {
    event.preventDefault();

    const contatoDTO = {
      name: contato.name,
      email: contato.email,
      message: contato.message,
    };

    fetch('https://contact-form-api-jamstack.herokuapp.com/message',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contatoDTO),
      }).then(async (response) => {
      if (response.ok) {
        return response.json();
      }
      const error = await response.text();
      throw new Error(error);
    }).then((responseJson) => {
      setFormState(FORM_STATES.SUCESS);
      // eslint-disable-next-line no-console
      console.log(responseJson);
    }).catch((error) => {
      setFormState(FORM_STATES.ERROR);
      // eslint-disable-next-line no-console
      console.log(error);
    });
  };

  return (
    <FormStyle onSubmit={onSubmit}>
      <InputStyle id="name" placeholder="digite seu nome" value={contato.name} onChange={handleChange} />
      <InputStyle id="email" placeholder="digite seu email" type="email" value={contato.email} onChange={handleChange} />
      <InputStyle id="message" placeholder="digite sua mensagem" as="textarea" rows="6" value={contato.message} onChange={handleChange} />
      <ButtonStyle disabled={!formIsValid}>
        Enviar
      </ButtonStyle>
      <BoxStyle marginTop="5px">
        { formState === FORM_STATES.SUCESS && (
        <Lottie
          width="50px"
          height="50px"
          config={{ animationData: sucessAnimation, loop: false, autoplay: true }}
        />
        )}
        { formState === FORM_STATES.ERROR && (
        <Lottie
          width="50px"
          height="50px"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
        ) }
      </BoxStyle>
    </FormStyle>
  );
};

export default Form;
