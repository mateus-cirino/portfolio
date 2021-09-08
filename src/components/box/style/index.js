import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils';

const BoxStyle = styled.div`
    ${({ theme }) => `background-color: ${theme.colors.backgroundColors.primary};`}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginTop')}
    ${propToStyle('padding')}
    ${propToStyle('display')}
    ${propToStyle('justifyContent')}
    ${propToStyle('alignItems')}
    ${propToStyle('flexWrap')}
    ${propToStyle('width')}
`;

export default BoxStyle;

BoxStyle.propTypes = {
  theme: PropTypes.oneOfType[PropTypes.object],
};
