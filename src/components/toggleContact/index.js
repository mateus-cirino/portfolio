import React, { useContext } from 'react';
import { BsChatFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import DarkModeContext from '../../context/darkMode';
import ToggleContactStyle from './style';

const ToggleContact = ({ onClick, marginRight }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const icon = <BsChatFill size={25} color={isDarkMode ? 'white' : 'black'} />;
  return (
    <ToggleContactStyle onClick={onClick} marginRight={marginRight}>
      {icon}
    </ToggleContactStyle>
  );
};

export default ToggleContact;

ToggleContact.propTypes = {
  onClick: PropTypes.func.isRequired,
  marginRight: PropTypes.string.isRequired,
};
