import React, { useContext } from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import ModeContext from '../../context/mode';
import ToggleModeStyle from './style';

const ToggleMode = () => {
  const { mode, setMode } = useContext(ModeContext);
  const onClickToggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');
  const icon = mode === 'light' ? <HiMoon /> : <CgSun />;
  return (
    <ToggleModeStyle onClick={onClickToggleMode}>
      {icon}
    </ToggleModeStyle>
  );
};

export default ToggleMode;
