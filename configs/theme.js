const theme = {
  space: [0, 4, 8, 16, 32, 64, 80],
  radii: [0, 4, 8, 16, 32, 64, 80],
  colors: {
    red: "#E06C75",
    teal: "#56B6C2",
    blue: "#61AFEF",
    green: "#98C379",
    orange: "#D19A66",
    yellow: "#E5C07B",
    violet: "#B57EDC",
    darkGray: "#181A1F",
    gray: "#5F6672",
    lightGray: "#A9B2C3",
    white: "#fff",
    black: "#0D1117",
    lighterGray: "#21252B",
  },
};

// space aliases
theme.space.small = theme.space[2];
theme.space.medium = theme.space[3];
theme.space.large = theme.space[6];

// color aliases
theme.colors.borders = theme.colors.black;
theme.colors.surface = theme.colors.darkGray;
theme.colors.background = theme.colors.lighterGray;
theme.colors.foreground = theme.colors.white;
theme.colors.error = theme.colors.red;
theme.colors.success = theme.colors.green;

export default theme;
