import styled from 'styled-components';

const InputStyle = styled.input`
    ${({ theme }) => theme.typographyVariants.paragraph}
    ${({ theme }) => `background-color: ${theme.colors.backgroundColors.secondary};`}
    ${({ theme }) => `color: ${theme.colors.textColors.primary};`}
    ${({ theme }) => `border: 1px solid ${theme.colors.textColors.primary};`}
    ${({ theme }) => `border-radius: ${theme.borderRadius};`}
    width: 100%;
    padding: 12px 16px;
    border-radius: 10px;
    margin-bottom: 15px;
    outline: 0;
`;

export default InputStyle;
