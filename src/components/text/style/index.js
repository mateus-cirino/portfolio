import styled from 'styled-components';
import PropType from 'prop-types';
import propToStyle from '../../../theme/utils';

const TextStyle = styled.span`
  ${(props) => props.theme.typographyVariants[props.typographyVariant]}
  ${propToStyle('width')}
  ${propToStyle('marginLeft')}
  ${(props) => `color: ${props.isDestaque ? props.theme.colors.secondary : props.theme.colors.primary}`}
`;

export default TextStyle;

TextStyle.propTypes = {
  typographyVariant: PropType.oneOf(['logo', 'title', 'paragraph']),
  isDestaque: PropType.oneOfType([PropType.bool]),
};
