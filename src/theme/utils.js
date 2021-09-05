import { css } from 'styled-components';
import { theme } from '.';

export const breakpointsMedia = (cssByBreakpoint) => {
  const { breakpoints } = theme;
  const breakpointNames = Object.keys(cssByBreakpoint);
  return breakpointNames.filter((it) => Object.prototype.hasOwnProperty.call(breakpoints, it))
    .map(
      (it) => css`
      @media only screen and (min-width: ${breakpoints[it]}px) {
        ${cssByBreakpoint[it]}
      }
    `,
    );
};

export const propToStyle = (propName) => (props) => {
  const propValue = props[propName];
  if (typeof propValue === 'string') {
    return {
      [propName]: propValue,
    };
  }

  if (typeof propValue === 'object') {
    return (breakpointsMedia({
      ...(propValue.xs && { xs: propValue.xs }),
      ...(propValue.md && { md: propValue.md }),
    }));
  }

  return {};
};
