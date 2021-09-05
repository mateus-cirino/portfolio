import React, { useContext } from 'react';
import { BsChatFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import ModeContext from '../../context/mode';
import ToggleContactStyle from './style';

const ToggleContact = ({ marginRight }) => {
  const { mode, setMode } = useContext(ModeContext);
  const onClickToggleContact = () => setMode(mode === 'light' ? 'dark' : 'light');
  const icon = <BsChatFill size={25} color={mode === 'light' ? 'black' : 'white'} />;
  return (
    <ToggleContactStyle onClick={onClickToggleContact} marginRight={marginRight}>
      {icon}
    </ToggleContactStyle>
  );
};

export default ToggleContact;

ToggleContact.propTypes = {
  marginRight: PropTypes.string.isRequired,
};
