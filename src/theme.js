import { createTheme } from "@mui/material/styles";

// https://colorhunt.co/palette/ddeb9da0c87827667b143d60

const theme = createTheme({
  palette: {
    primary: {
      main: "#143D60",
    },
    secondary: {
      main: "#dff297",
    },
    background: {
      default: "#143D60",
    },
    text: {
      primary: "#dff297",
    },
    colors: {
      black: "#000",
      white: "#fff",
      lightBlue: "#3257A",
    },
  },
  typography: {
    fontFamily: "Rokkitt",
    fontSize: 14,
  },
});

export default theme;
