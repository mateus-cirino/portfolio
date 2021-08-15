import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    h1, h2, p, a {
      margin: 0;
    }
`;

const typographyVariants = {
  logo: {
    fontFamily: '\'Montserrat\', sans-serif',
    fontSize: '36px',
    fontWeight: '900',
    lineHeight: '14px',
    letterSpacing: '-0.05em',
    textTransform: 'capitalize',
    fontVariant: 'small-caps',
  },
  title: {
    fontFamily: '\'Montserrat\', sans-serif',
    fontSize: '24px',
    fontWeight: '900',
    lineHeight: '8px',
    letterSpacing: '-0.05em',
    textTransform: 'lowercase',
    fontVariant: 'small-caps',
  },
  paragraph: {
    fontFamily: '\'Merriweather\', sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '18px',
  },
  link: {
    fontFamily: '\'Merriweather\', sans-serif',
    fontSize: '16px',
    fontWeight: '900',
    lineHeight: '18px',
    fontStyle: 'italic',
  },
};

const colors = {
  primary: '#000000',
  secondary: '#D32929',
};

const breakpoints = {
  xs: 0,
  md: 768,
};

export const theme = {
  typographyVariants,
  colors,
  breakpoints,
};
