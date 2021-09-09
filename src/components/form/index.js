import React from 'react';
import ButtonStyle from '../button/style';
import InputStyle from '../input/style';
import FormStyle from './style';

const Form = () => (
  <FormStyle>
    <InputStyle placeholder="digite seu nome" />
    <InputStyle placeholder="digite sua mensagem" as="textarea" rows="8" />
    <ButtonStyle>
      Enviar
    </ButtonStyle>
  </FormStyle>
);

export default Form;
