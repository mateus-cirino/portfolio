import React from 'react';
import InputStyle from '../input/style';
import FormStyle from './style';

const Form = () => (
  <FormStyle>
    <InputStyle placeholder="digite seu nome" />
    <InputStyle placeholder="digite sua mensagem" as="textarea" rows="8" />
  </FormStyle>
);

export default Form;
