import styled from 'styled-components';

const ToggleModeStyle = styled.button`
  cursor: pointer;
  ${({ theme }) => `color: ${theme.colors.textColors.primary};`}
  background-color: transparent;
  border: none;
`;

export default ToggleModeStyle;
