export const HEADER_HEIGHT = 75;
// export const LIGHT = "#505050";
// export const LIGHT = "rgb(17, 17, 17)";
// export const DARK = "#333333";
// export const DARK = "rgb(17, 17, 17)";

export const LIGHT = "#303030";
export const DARK = "#222222";

const OLD_COLORS = {
  // weta green
  // accent: "#3cb878",
  // indian turquoise
  // accent: "#00bfff",
  // subtle: "#2F5C71",
  // purple cow
  // accent: "#AB82FF",
};

let theme: "light" | "dark" = "dark";
export const THEME: "light" | "dark" = theme;

const LIGHT_THEME = {
  // Background colors
  pale: "#d7d7d7",
  light: "#cccccc",
  dark: "#bfbfbf",
  header: "#888888",

  // color theme
  accent: "#224f4f",
  subtle: "#008686",
  smoke: "#00868b",

  cardText: "black",
  cardLineTop: "#363636",
  cardLineBottom: "#444444",

  tagText: "#343434",
  tagBorder: "#444444",

  linkNonHover: "black",
};

const DARK_THEME = {
  // Background colors
  pale: "#444444",
  light: "#303030",
  dark: "#222222",
  header: "#333333",

  // aqua
  accent: "#40e0d0",
  subtle: "#386a65",
  smoke: "#40e0d0",

  cardText: "white",
  cardLineTop: "#363636",
  cardLineBottom: "#444444",

  tagText: "#e7e7e7",
  tagBorder: "#555555",

  linkNonHover: "white",
};

const THEMES = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export const PALETTE = THEMES[THEME];
