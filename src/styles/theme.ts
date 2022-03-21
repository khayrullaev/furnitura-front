export const colors = {
  main: "#FFCA27",
  accent: "#FFE185",
  blueSemantic: "#2D9CDB",
  redSemantic: "#EB5757",
  greenSemantic: "#27AE60",
  neutral1: "#0B0B0B",
  neutral2: "#636363",
  neutral3: "#B0B0B0",
  neutral4: "#DBDBDB",
  neutral5: "#FFFFFF",
  transparent: "transparent",
  shadow: "#C4C4C4",
};

export const theme = {
  primary: colors.main,
  bottomNavigation: {
    backgroundColor: colors.neutral5,
    active: colors.main,
    inactive: colors.neutral3,
  },
  ...colors,
};
