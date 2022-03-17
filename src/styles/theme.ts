export const colors = {
  orange: "#FFCA27",
  accent: "#FFE185",
  blueSemantic: "#2D9CDB",
  redSemantic: "#EB5757",
  greenSemantic: "#27AE60",
  white: "#FFF",
  black: "#000",
  dark: "#0B0B0B",
  darkLighter: "#636363",
  grey: "#B0B0B0",
  greyLight: "#DBDBDB",
  transparent: "transparent",
};

export const theme = {
  primary: colors.orange,
  bottomNavigation: {
    backgroundColor: colors.white,
    active: colors.orange,
    inactive: colors.grey,
  },
  ...colors,
};
