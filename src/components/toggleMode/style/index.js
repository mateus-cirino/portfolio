import { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../../../context/mode';

const ToggleModeStyle = styled.button`
  cursor: pointer;
  ${({ theme }) => {
    const { mode } = useContext(ModeContext);
    return `color: ${theme.colors.textColors[mode].primary};`;
  }}
  background-color: transparent;
  border: none;
`;

export default ToggleModeStyle;
