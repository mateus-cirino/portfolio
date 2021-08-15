import styled from 'styled-components';
import PropType from 'prop-types';
import { useContext } from 'react';
import { propToStyle } from '../../../theme/utils';
import ModeContext from '../../../context/mode';

const TextStyle = styled.span`
  ${(props) => props.theme.typographyVariants[props.typographyVariant]}
  ${propToStyle('width')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginLeft')}
  ${(props) => {
    const { mode } = useContext(ModeContext);
    return `color: ${props.isDestaque ? props.theme.colors.textColors[mode].secondary : props.theme.colors.textColors[mode].primary};`;
  }}
`;

export default TextStyle;

TextStyle.propTypes = {
  typographyVariant: PropType.oneOf(['logo', 'title', 'paragraph', 'link']).isRequired,
  isDestaque: PropType.oneOfType([PropType.bool]),
};
