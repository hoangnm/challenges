const colors = {
  positive: '#2257f0',
  positiveDark: '#0e43dc',
  light: '#fff',
  light1: '#fffffff5',
  grey: '#787178',
  grey1: '#c2bcc2',
};

const theme = {
  colors,
  radii: {
    sm: 3,
    md: 4,
  },
  shadows: {
    card: `0px 4px 8px 1px ${colors.grey1}`,
  },
  fontWeights: {
    light: 100,
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

export default theme;
