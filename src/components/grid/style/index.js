import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils';

const ContainerStyle = styled.div`
margin-right: auto;
margin-left: auto;
${({ theme }) => `background-color: ${theme.colors.backgroundColors};`}
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
