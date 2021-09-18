import styled from 'styled-components';
import PropType from 'prop-types';
import { propToStyle } from '../../../theme/utils';

const TextStyle = styled.span`
  ${(props) => props.theme.typographyVariants[props.typographyVariant]}
  ${propToStyle('width')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginLeft')}
  ${propToStyle('textAlign')}
  ${(props) => `color: ${props.isDestaque ? props.theme.colors.textColors.secondary : props.theme.colors.textColors.primary};`}
`;

export default TextStyle;

TextStyle.propTypes = {
  typographyVariant: PropType.oneOf(['logo', 'title', 'paragraph', 'link']).isRequired,
  isDestaque: PropType.oneOfType([PropType.bool]),
};
