/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import DarkModeContext from '../src/context/darkMode';
import { GlobalStyle, themeDark, themeLight } from '../src/theme/index';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const getTheme = isDarkMode ? themeDark : themeLight;
  return (
    <>
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <GlobalStyle theme={getTheme} />
        <ThemeProvider theme={getTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </DarkModeContext.Provider>
    </>
  );
}

export default MyApp;
