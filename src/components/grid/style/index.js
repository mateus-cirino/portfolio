import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils';

const ContainerStyle = styled.div`
margin-right: auto;
margin-left: auto;
min-height: 100vh;
${breakpointsMedia({
    xs: css`
        width: 100%;
        padding-right: 28px;
        padding-left: 28px;
        padding-bottom: 28px;
    `,
    md: css`
        width: 50%;
        padding-right: 16px;
        padding-left: 16px;
        padding-bottom: 16px;
    `,
  })}
`;

export default ContainerStyle;
