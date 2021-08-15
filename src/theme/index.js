import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    p {
      margin: 0;
    }
`;

const typographyVariants = {
  logo: {
    fontFamily: '\'Montserrat\', sans-serif',
    fontSize: '36px',
    fontWeight: '900',
    lineHeight: '34px',
    letterSpacing: '-0.07em',
    textTransform: 'capitalize',
    fontVariant: 'small-caps',
  },
  title: {
    fontFamily: '\'Montserrat\', sans-serif',
    fontSize: '24px',
    fontWeight: '900',
    lineHeight: '26px',
    letterSpacing: '-0.07em',
    textTransform: 'lowercase',
    fontVariant: 'small-caps',
  },
  paragraph: {
    fontFamily: '\'Merriweather\', sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '18px',
    letterSpacing: '0em',
  },
  link: {
    fontFamily: '\'Merriweather\', sans-serif',
    fontSize: '16px',
    fontWeight: '900',
    lineHeight: '18px',
    letterSpacing: '0em',
    fontStyle: 'italic',
  },
};

const colors = {
  primary: '#000000',
  secondary: '#D32929',
};

export const theme = {
  typographyVariants,
  colors,
};
