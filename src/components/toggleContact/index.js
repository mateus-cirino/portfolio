import React, { useContext } from 'react';
import { BsChatFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import ModeContext from '../../context/mode';
import ToggleContactStyle from './style';

const ToggleContact = ({ onClick, marginRight }) => {
  const { mode } = useContext(ModeContext);
  const icon = <BsChatFill size={25} color={mode === 'light' ? 'black' : 'white'} />;
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
