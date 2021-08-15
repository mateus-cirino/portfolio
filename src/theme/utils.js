const propToStyle = (propName) => (props) => {
  const propValue = props[propName];
  if (typeof propValue === 'string') {
    return {
      [propName]: propValue,
    };
  }
};

export default propToStyle;
