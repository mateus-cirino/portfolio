import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils';

const ContainerStyle = styled.div`
margin-right: auto;
margin-left: auto;
${({ theme }) => `background-color: ${theme.colors.backgroundColors.primary};`}
${breakpointsMedia({
    xs: css`
        width: 100%;
        padding: 24px;
    `,
    md: css`
        width: 50%;
        padding: 16px;
    `,
  })}
`;

export default ContainerStyle;
