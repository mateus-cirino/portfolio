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
      ${({ theme }) => `background-color: ${theme.colors.backgroundColors.primary};`}
    }
    ${profileImageCSS}
    * {
      transition: opacity 0.3s ease-out, background 0.3s ease-out;
      box-sizing: border-box;
    }
`;

GlobalStyle.propTypes = {
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
    fontSize: '28px',
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

export const breakpoints = {
  xs: 0,
  md: 768,
};

export const lightColors = {
  colors: {
    textColors: {
      primary: '#000000',
      secondary: '#D32929',
    },
    backgroundColors: {
      primary: '#FFFFFF',
      secondary: '#f5f5f5',
    },
  },
};

export const darkColors = {
  colors: {
    textColors: {
      primary: '#FFFFFF',
      secondary: '#D7385E',
    },
    backgroundColors: {
      primary: '#070C0E',
      secondary: '#0b1417',
    },
  },
};

export const themeLight = {
  typographyVariants,
  ...lightColors,
};

export const themeDark = {
  typographyVariants,
  ...darkColors,
};
