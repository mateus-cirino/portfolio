import { createContext } from 'react';

const ModeContext = createContext({
  mode: '',
  setMode: () => {},
});

export default ModeContext;
