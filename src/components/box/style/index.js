import { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModeContext from '../../../context/mode';
import { propToStyle } from '../../../theme/utils';

const BoxStyle = styled.div`
    ${propToStyle('margin')}
    ${propToStyle('marginTop')}
    ${propToStyle('padding')}
    ${propToStyle('display')}
    ${propToStyle('justifyContent')}
    ${propToStyle('width')}
    ${({ theme }) => {
    const { mode } = useContext(ModeContext);
    return `background-color: ${theme.colors.backgroundColors[mode]};`;
  }}
`;

export default BoxStyle;

BoxStyle.propTypes = {
  theme: PropTypes.object.isRequired,
};
