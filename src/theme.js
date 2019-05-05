const colors = {
  positive: '#2257f0',
  positiveDark: '#0e43dc',
  light: '#fff',
  light1: '#fffffff5',
  grey: '#787178',
};

const theme = {
  colors,
  borderRadius: {
    sm: '3px',
    md: '4px',
  },
};

export const getColor = name => {
  return props => {
    return props.theme.colors[name];
  };
};

export const getTheme = (name, sub) => {
  return props => {
    return props.theme[name][sub];
  };
};

export default theme;
