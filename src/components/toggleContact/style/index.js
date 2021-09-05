import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils';

const ToggleContactStyle = styled.button`
  ${({ theme }) => `color: ${theme.colors.textColors.primary};`}
  ${propToStyle('marginRight')}
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export default ToggleContactStyle;
