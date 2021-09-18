import React, { useContext } from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import ToggleModeStyle from './style';
import DarkModeContext from '../../context/darkMode';

const ToggleMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const icon = (isDarkMode ? <CgSun size={25} /> : <HiMoon size={25} />);
  return (
    <ToggleModeStyle onClick={toggleDarkMode}>
      {icon}
    </ToggleModeStyle>
  );
};

export default ToggleMode;
