import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils';

const BoxStyle = styled.div`
    ${propToStyle('margin')}
    ${propToStyle('marginTop')}
    ${propToStyle('padding')}
    ${propToStyle('display')}
    ${propToStyle('justifyContent')}
    ${propToStyle('width')}
    ${({ theme }) => `background-color: ${theme.colors.backgroundColors};`}
`;

export default BoxStyle;

BoxStyle.propTypes = {
  theme: PropTypes.oneOfType[PropTypes.object],
};
