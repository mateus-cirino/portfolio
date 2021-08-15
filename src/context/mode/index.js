import { createContext } from 'react';

const ModeContext = createContext({
  mode: 'light',
  setMode: () => {},
});

export default ModeContext;
