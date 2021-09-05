import { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../../../context/mode';
import { propToStyle } from '../../../theme/utils';

const ToggleContactStyle = styled.button`
  ${({ theme }) => {
    const { mode } = useContext(ModeContext);
    return `color: ${theme.colors.textColors[mode].primary};`;
  }}
  ${propToStyle('marginRight')}
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export default ToggleContactStyle;
