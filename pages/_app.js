/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ModeContext from '../src/context/mode';
import { theme, GlobalStyle } from '../src/theme/index';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');

  return (
    <>
      <ModeContext.Provider value={{ mode, setMode }}>
        <GlobalStyle mode={mode} theme={theme} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ModeContext.Provider>
    </>
  );
}

export default MyApp;
