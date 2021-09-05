import React, { useContext } from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import PropTypes from 'prop-types';
import ModeContext from '../../context/mode';
import ToggleModeStyle from './style';

const ToggleMode = ({ onClick }) => {
  const { mode } = useContext(ModeContext);
  const icon = mode === 'light' ? <HiMoon size={25} /> : <CgSun size={25} />;
  return (
    <ToggleModeStyle onClick={onClick}>
      {icon}
    </ToggleModeStyle>
  );
};

export default ToggleMode;

ToggleMode.propTypes = {
  onClick: PropTypes.func.isRequired,
};
