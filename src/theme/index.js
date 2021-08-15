import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import PropTypes from 'prop-types';
import { profileImageCSS } from '../components/profileImage/style';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    h1, h2, p, a {
      margin: 0;
      text-decoration: none;
    }
    #__next {
      ${({ mode, theme }) => `background-color: ${theme.colors.backgroundColors[mode]};`}
    }
    ${profileImageCSS}
`;

GlobalStyle.propTypes = {
  mode: PropTypes.oneOfType([PropTypes.string]),
  theme: PropTypes.oneOfType([PropTypes.object]),
};

const typographyVariants = {
  logo: {
    fontFamily: '\'Montserrat\', sans-serif',
    fontSize: '36px',
    fontWeight: '900',
    lineHeight: '1.4em',
    letterSpacing: '-0.05em',
    textTransform: 'capitalize',
    fontVariant: 'small-caps',
  },
  title: {
    fontFamily: '\'Montserrat\', sans-serif',
    fontSize: '24px',
    fontWeight: '900',
    lineHeight: '1.4em',
    letterSpacing: '-0.05em',
    textTransform: 'lowercase',
    fontVariant: 'small-caps',
  },
  paragraph: {
    fontFamily: '\'Merriweather\', sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.4em',
  },
  link: {
    fontFamily: '\'Merriweather\', sans-serif',
    fontSize: '16px',
    fontWeight: '900',
    lineHeight: '1.4em',
  },
};

const colors = {
  textColors: {
    light: {
      primary: '#000000',
      secondary: '#D32929',
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#D7385E',
    },
  },
  backgroundColors: {
    light: '#FFFFFF',
    dark: '#070C0E',
  },
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
