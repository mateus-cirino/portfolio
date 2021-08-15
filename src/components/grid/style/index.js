import { useContext } from 'react';
import styled, { css } from 'styled-components';
import ModeContext from '../../../context/mode';
import { breakpointsMedia } from '../../../theme/utils';

const ContainerStyle = styled.div`
margin-right: auto;
margin-left: auto;
${({ theme }) => {
    const { mode } = useContext(ModeContext);
    return `background-color: ${theme.colors.backgroundColors[mode]};`;
  }}
${breakpointsMedia({
    xs: css`
        width: 100%;
        padding-right: 28px;
        padding-left: 28px;
        padding-bottom: 28px;
        padding-top: 28px;
    `,
    md: css`
        width: 50%;
        padding-right: 16px;
        padding-left: 16px;
        padding-bottom: 16px;
        padding-top: 16px;
    `,
  })}
`;

export default ContainerStyle;
