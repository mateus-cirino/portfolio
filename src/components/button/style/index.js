import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils';

const ButtonGhost = css`
    background-color: transparent;
    border: none;
`;

const ButtonPrimary = css`
    ${({ theme }) => `background-color: ${theme.colors.backgroundColors.secondary};`}
    ${({ theme }) => `border: 1px solid ${theme.colors.textColors.primary};`}
    ${({ theme }) => `border-radius: ${theme.borderRadius};`}
    width: 100%;
    &:disabled {
      cursor: not-allowed;
      opacity: .2;
    }
`;

const ButtonStyle = styled.button`
    ${({ theme }) => theme.typographyVariants.paragraph}
    ${({ theme }) => `color: ${theme.colors.textColors.primary};`}
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonPrimary)}
    ${propToStyle('display')}
    ${propToStyle('marginLeft')}
    padding: 12px 16px;
    cursor: pointer;
    &:hover,
    &:focus {
      opacity: 0.6;
    }
    &:disabled {
      opacity: 0.2;
    }
`;

export default ButtonStyle;
