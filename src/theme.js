const colors = {
  positive: '#2257f0',
  positiveDark: '#0E43DC',
  light: '#fff',
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
