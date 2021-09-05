import { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../../../context/mode';
import { propToStyle } from '../../../theme/utils';

const ToggleContactStyle = styled.button`
  cursor: pointer;
  ${({ theme }) => {
    const { mode } = useContext(ModeContext);
    return `color: ${theme.colors.textColors[mode].primary};`;
  }}
  background-color: transparent;
  border: none;
  ${propToStyle('marginRight')}
`;

export default ToggleContactStyle;
